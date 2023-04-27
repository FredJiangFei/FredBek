function handler(req, res) {
  const categories = [
    {
      title: 'Products & Applications',
      route: 'products-and-applications',
      children: [
        {
          title: 'Markets',
          route: 'markets',
          isCategory: true,
          children: [
            { title: 'Automotive', route: 'automotive', children: [] },
            { title: 'Construction', route: 'construction', children: [] },
          ],
        },
      ],
    },
    { title: 'Sustainability', route: 'sustainability', children: [] },
  ];
  res.status(200).json({ data: categories });
}

export default handler;
