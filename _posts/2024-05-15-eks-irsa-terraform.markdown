---
layout: post
title: "Is Your Kubernetes Secure Enough? Explore EKS IRSA & Terraform"
image: >-
     ../assets/images/posts/02-eks-irsa-terraform.webp
date:   2024-05-15 18:11:47 +0200
categories: kubernetes security best-practices cloud devops
---

This article contains the overview and the use case of IRSA (IAM role for Service Account) that can be used to used for securing the Kubernetes cluster. This article will also provide the examples of implementing IRSA using terraform.

### Prerequisites

* An AWS account with permissions to create EKS clusters and IAM roles.
* The [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) are installed on your local machine.
* A running EKS cluster with at least one node group. You can use [eksctl](https://eksctl.io/) or [terraform eks module](https://registry.terraform.io/modules/terraform-aws-modules/eks/aws/latest) to spin up the EKS cluster.

Let us begin by describing the steps we must follow to implement IRSA on the EKS cluster.

### Step 1: Create an IAM policy

The first step is to create an IAM policy that grants the necessary permissions to your EKS pods. You can use the following example policy as a starting point:

```hcl
resource "aws_iam_policy" "s3_access_policy" {
  name_prefix = "eks-s3-access-policy-"
  description = "Policy for EKS IRSA S3"
  policy      = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = [
          "s3:Get*",
          "s3:List*",
        ]
        Resource = "*"
      },
    ]
  })
}
```

This policy allows your pods to read and list objects in all S3 buckets in your AWS account. Replace the resource ARN with the ARN of the specific resource you want to grant access to.

### Step 2: Create an IAM role

Next, create an IAM role that your EKS pods can assume to gain the permissions defined in the IAM policy. You can use the following Terraform code to create a new IAM role:

```hcl
resource "aws_iam_role" "s3_access_role" {
  name = "eks-s3-access-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          Service = "eks.amazonaws.com"
        }
```

> Replace `eks-s3-access-role` with a name of your choice.

### Step 3: Attach the IAM policy to the IAM role

Once you’ve created the IAM role, attach the IAM policy you created in step 1 to the role using the following Terraform code:

```hcl
resource "aws_iam_role_policy_attachment" "s3_access_role_policy_attachment" {
  role       = aws_iam_role.s3_access_role.name
  policy_arn = aws_iam_policy.s3_access_policy.arn
}
```

> Replace `aws_iam_policy.s3_access_policy.arn` with the ARN of the IAM policy you created in step 1, and `aws_iam_role.s3_access_role.name` with the name of the IAM role you created in step 2.

### Step 4: Create a Kubernetes service account

Next, create a Kubernetes service account that you can associate with the IAM role you created in step 2. Use the following Terraform code to create a new service account:

```hcl
resource "kubernetes_service_account" "s3_access_service_account" {
  metadata {
    name = "s3-access-sa"
    namespace = "default"
  }
}
```

> Note: If you want to create Kubernetes service account using terraform, you must use [Kubernetes Provider](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs) by terraform.

### Step 5: Annotate the service account with the IAM role ARN

To associate the Kubernetes service account with the IAM role you created in step 2, annotate the service account with the ARN of the role using the following Terraform code:

```hcl
resource "kubernetes_service_account_annotation" "s3_access_service_account_annotation" {
  metadata {
    name = kubernetes_service_account.s3_access_service_account.metadata.0.name
    namespace = kubernetes_service_account.s3_access_service_account.metadata.0.namespace
  }
  annotations = {
    "eks.amazonaws.com/role-arn" = aws_iam_role.s3_access_role.arn
  }
}
```

> Replace `aws_iam_role.s3_access_role.arn` with the ARN of the IAM role you created in step 2, and `kubernetes_service_account.s3_access_sa.metadata.0.name` with the name of the Kubernetes service account you created in step 4.

### Step 6: Deploy a sample pod

Finally, deploy a sample pod that uses the IAM role you created in step 2 to access an AWS resource. Use the following Terraform code to deploy a sample pod:

```hcl
resource "kubernetes_manifest" "s3_access_pod" {
  manifest = jsonencode({
    apiVersion = "v1"
    kind       = "Pod"
    metadata = {
      name = "s3-access-pod"
    }
    spec = {
      containers = [
        {
          name    = "s3-access-container"
          image   = "amazonlinux:2"
          command = ["sh", "-c", "yum install -y aws-cli && aws s3 ls"]
          volumeMounts = [
            {
              name      = "aws-credentials"
              mountPath = "/var/run/secrets/aws"
            },
          ]
          env = [
            {
              name  = "AWS_REGION"
              value = "eu-central-1"
            },
          ]
        },
      ]
      volumes = [
        {
          name = "aws-credentials"
          projected = {
            sources = [
              {
                serviceAccountToken = {
                  path              = "aws-credentials"
                  expirationSeconds = 3600
                }
              },
            ]
          }
        },
      ]
      serviceAccountTokenName = kubernetes_service_account.s3_access_sa.metadata.0.name
    }
  })
}
```

This deploys a sample Amazon Linux container that mounts the AWS credentials from the Kubernetes service account and sets the AWS region environment variable. Replace `kubernetes_service_account.s3_access_sa.metadata.0.name` with the name of the Kubernetes service account you created in step 4.

That’s it! Once you apply these Terraform configurations, you should have a Kubernetes pod that has access to the AWS resource specified in the IAM policy you created in step 1, using the IAM role you created in step 2.

### Conclusion

In conclusion, EKS IRSA is a powerful feature that allows you to achieve fine-grained access control to AWS resources on Kubernetes clusters. With Terraform, you can easily automate the process of creating and managing IAM roles, Kubernetes service accounts, and their association, allowing you to streamline your infrastructure management workflow. By following this step-by-step guide, you can implement EKS IRSA with Terraform and take advantage of its benefits to achieve greater security and efficiency in your Kubernetes environment.
