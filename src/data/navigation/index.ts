const navigation = () => {
  return [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: "mage:dashboard-2",
    },
    {
      title: "User Profile",
      path: "/profile",
      icon: "iconamoon:profile-light",
    },
    {
      title: "Banks",
      path: "/banks",
      icon: "proicons:bank",
    },
    {
      title: "Recipients",
      path: "/recipients",
      icon: "mage:users",
      children: [
        {
          title: "List",
          path: "/recipients/list",
          icon: 'material-symbols:circle-outline'
        },
        {
          title: "Grid",
          path: "/recipients/grid",
          icon: 'material-symbols:circle-outline'
        },
      ],
    },
    {
      title: "Payments",
      path: "/payments",
      icon: "fluent:payment-28-regular",
    },

    // {
    //   title: "Invoice",
    //   icon: "material-symbols:description",
    //   children: [
    //     {
    //       title: "List",
    //       path: "/invoice/list",
    //       icon: 'material-symbols:circle-outline'
    //     },
    //     {
    //       title: "Preview",
    //       path: "/invoice/preview",
    //       icon: 'material-symbols:circle-outline'
    //     },
    //     {
    //       title: "Edit",
    //       path: "/invoice/edit",
    //       icon: 'material-symbols:circle-outline'
    //     },
    //     {
    //       title: "Add",
    //       path: "/invoice/add",
    //       icon: 'material-symbols:circle-outline'
    //     },
    //   ],
    // },
  ];
};

export default navigation;
