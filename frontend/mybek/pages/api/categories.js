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
  const { data } = await apolloClient.query({
    query: CATEGORY,
  });
  const categories = data.categories.data.map((category) => {
    return {
      id: category.id,
      ...category.attributes,
    };
  });

  res.status(200).json({ data: categories });
}

export default handler;
