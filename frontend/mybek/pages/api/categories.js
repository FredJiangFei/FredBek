import apolloClient from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const CATEGORY = gql`
  query {
    categories {
      data {
        id
        attributes {
          title
          route
        }
      }
    }
  }
`;

async function handler(req, res) {
  // const { data } = await apolloClient.query({
  //   query: CATEGORY,
  // });
  // const categories = data.categories.data.map((category) => {
  //   return {
  //     id: category.id,
  //     ...category.attributes,
  //   };
  // });

  const categories = [
    {
      id: 1,
      title: 'Products & Applications',
      route: 'products-and-applications',
      children: [
        {
          id: 2,
          title: 'Markets',
          route: 'markets',
          isCategory: true,
          children: [
            { id: 3, title: 'Automotive', route: 'automotive' },
            {
              id: 4,
              title: 'Construction',
              route: 'construction',
            },
          ],
        },
        {
          id: 6,
          title: 'Our core competencies',
          route: 'our-core-competencies',
          isCategory: true,
        },
      ],
    },
    {
      title: 'Sustainability',
      route: 'sustainability',
      children: [
        {
          id: 5,
          title: 'Protect the planet',
          route: 'protect-the-planet',
          isCategory: true,
        },
        {
          id: 7,
          title: 'Put people first',
          route: 'put-people-first',
          isCategory: true,
        },
        {
          id: 8,
          title: 'Act with integrity',
          route: 'act-with-integrity',
          isCategory: true,
        },
        {
          id: 9,
          title: 'Reports',
          route: 'reports',
          isCategory: true,
        }
      ],
    },
  ];

  res.status(200).json({ data: categories });
}

export default handler;
