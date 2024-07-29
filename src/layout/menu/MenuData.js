const menu = [
  {
    heading: "Quick Links",
  },

  {
    icon: "layers",
    text: "Account Signup",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=12",
    dashboard: true,
  },

  {
    icon: "lock-alt",
    text: "Account Signin",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=10",
    dashboard: true,
  },

  {
    icon: "template",
    text: "Website Templates",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=1",
    dashboard: true,
  },

  {
    icon: "dashboard",
    text: "Billing Dashboard",
    link: "/view?page=/account/clientarea.php",
    badge: "Updated",
    dashboard: true,
  },
  {
    icon: "account-setting",
    text: "Professional Services",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=13",
    dashboard: true,
  },


  {
    heading: "Website Templates ",
  },
  {
    icon: "umbrela",
    text: "All Website Templates",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=1",
  },
  
  {
    icon: "clock",
    text: "Retail & Hospitality",
    active: false,
    badge: "New",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=6",
    
  },
  {
    icon: "monitor",
    text: "Home & Lifestyle",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=3",
    active: false,
    
  },
  {
    icon: "color-palette",
    text: "Creative & Digital",
    active: false,
    badge: "Trending",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=8",
    
  },
  {
    icon: "grid-alt",
    text: "Applications",
    active: false,
    subMenu: [
      {
        text: "Account Dashboard",
        link: "/view?page=/account/clientarea.php",
        icon: "meter",
        theme: "bg-purple-dim",
      },
      {
        text: "Manage Billing",
        link: "/view?page=/account/clientarea.php?action=invoices",
        icon: "wallet saving",
        theme: "bg-orange-dim",
      },
      {
        text: "My Services",
        link: "/view?page=/account/clientarea.php?action=services",
        icon: "swap-alt",
        theme: "bg-primary-dim",
      },
      {
        text: "Affiliate Partners",
        link: "/view?page=/account/affiliates.php",
        icon: "briefcase",
        theme: "bg-success-dim",
      },
      {
        text: "Contacts and Users", 
        link: "/view?page=/account/account/users",
        icon: "user-list",
        theme: "bg-info-dim",
      },
   
    ],
  },
  {
    icon: "spark",
    text: "Specialized Industries",
    active: false,
    link: "/view?page=/account/pancho-website-page-redirect.php?page=7",
    
  },

  {
    icon: "network",
    text: "Online Business Models",
    active: false,
    link: "/view?page=/account/pancho-website-page-redirect.php?page=4",
    
  },
  
   
  {
    heading: "Manage Account",
  },
  {
    icon: "user-alt",
    text: "Billing Dashboard",
    link: "/view?page=/account/clientarea.php",
    active: false,
    
  },
  {
    icon: "wallet-saving",
    text: "Manage Billing",
    link: "/view?page=/account/clientarea.php",
    active: false,
    subMenu: [
      {
        text: "My Invoices",
        link: "/view?page=/account/clientarea.php?action=invoices",
        
      },
      {
        text: "My Orders",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
      {
        text: "My Quotes",
        link: "/view?page=/account/clientarea.php?action=quotes",
        
      },
      {
        text: "Mass Payment",
        link: "/view?page=/account/clientarea.php?action=masspay&all=true",
        
      },
      {
        text: "Add Funds",
        link: "/view?page=/account/clientarea.php?action=addfunds",
        
      },
    ],
  },
  
  {
    icon: "invest",
    text: "Manage Orders",
    link: "/view?page=/account/clientarea.php?action=services",
    badge: "Purchases",
    active: false,
    
  },
  {
    icon: "briefcase",
    text: "Affiliate Partners",
    link: "/view?page=/account/affiliates.php",
    active: false,
    subMenu: [
      {
        text: "Partner Dashboard",
        link: "/view?page=/account/affiliates.php",
      },
      {
        text: "My Commissions",
        link: "/view?page=/account/index.php?m=AffiliatesPlus&hcommissions=1",
      },
      {
        text: "My Payouts",
        link: "/view?page=/account/index.php?m=AffiliatesPlus",
      },
      {
        text: "Link Generator",
        link: "/view?page=/account/index.php?m=AffiliatesPlus&a=links",
      },
     

    ],
  },
  {
    icon: "user-list-fill",
    text: "Contacts and Users",
    link: "/view?page=/account/account/users",
    active: false,
    subMenu: [
      {
        text: "Manage Users",
        link: "/view?page=/account/account/users",
      },
      {
        text: "Manage Contacts",
        link: "/view?page=/account/account/contacts",
      },
      
    ],
  },
  {
    heading: "Help & Information",
  },
  {
    icon: "question",
    text: "Open Support Ticket",
    link: "/view?page=/account/submitticket.php",
    active: false,
    
  },
  {
    icon: "inbox-in",
    text: "My Support Tickets",
    link: "/view?page=/account/supporttickets.php",
    active: false,
    
  },
  
  {
    icon: "play-circle",
    text: "Video Tutorials",
    link: "/view?page=/account/pancho-website-page-redirect.php?page=11",
    active: false,
    
  },
  {
    icon: "info",
    text: "Knowledgebase",
    link: "/view?page=/account/knowledgebase",
    active: false,
    
  },
  {
    icon: "calendar-alt",
    text: "Announcements",
    link: "/view?page=/account/announcements",
    active: false,
    
  },
  {
    icon: "live",
    text: "Network Status",
    link: "/view?page=/account/serverstatus",
    active: false,
    
  },
  {
    icon: "file-docs",
    text: "Terms of Service",
    link: "/view?page=/account/pancho_terms-of-service.php",
    
  },
  {
    icon: "eye",
    text: "Privacy Policy",
    link: "/view?page=/account/pancho_privacy-policy.php",
    
  },
  {
    icon: "focus",
    text: "Cookie Policy",
    link: "/view?page=/account/pancho_cookie-policy.php",
    active: "false",
  },
  
];
export default menu;
