import { BrandIconType } from '@/components/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/kubernetes',
    iconType: 'Kubernetes',
    slug: 'kubernetes',
    title: 'Kubernetes',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
  {
    href: '/tags/aws',
    iconType: 'Docker',
    slug: 'aws',
    title: 'AWS',
  },
  {
    href: '/tags/terraform',
    iconType: 'Typescript',
    slug: 'terraform',
    title: 'Terraform',
  },
  {
    href: '/tags/security',
    iconType: 'NestJS',
    slug: 'security',
    title: 'Security',
  },
  {
    href: '/tags/finops',
    iconType: 'React',
    slug: 'finops',
    title: 'Finops',
  },
];

export default popularTags;
