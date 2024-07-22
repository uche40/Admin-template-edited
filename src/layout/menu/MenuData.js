const menu = [
  {
    heading: "Quick Links",
  },
  {
    icon: "template",
    text: "My Websites",
    link: "/open?web=builder&page=/",
    dashboard: true,
  },

  {
    icon: "cc-new",
    text: "Browse Websites",
    link: "/online?web=cms&page=/websites/",
    dashboard: true,
  },

  {
    icon: "dashboard",
    text: "Billing Dashboard",
    link: "/online?page=/account/clientarea.php",
    badge: "Updated",
    dashboard: true,
  },
  {
    icon: "account-setting",
    text: "Book Expert Consultation",
    link: "/view?page=/account/register.php",
    dashboard: true,
  },


  {
    heading: "Prebuilt Websites ",
  },
  {
    icon: "reports-alt",
    text: "All Websites",
    link: "/invest",
    link: "/web?page=/websites/",
  },
  {
    icon: "sun",
    text: "Professional Services",
    active: false,
    link: "/online?web=cms&page=/websites/website-category/professional-services/",
    
  },
  {
    icon: "color-palette",
    text: "Retail & Hospitality",
    active: false,
    badge: "New",
    link: "/web?page=/websites/website-category/retail-hospitality/",
    
  },
  {
    icon: "play-circle",
    text: "Home & Lifestyle",
    link: "/web?page=/websites/website-category/home-lifestyle/",
    active: false,
    
  },
  {
    icon: "clock",
    text: "Creative & Digital",
    active: false,
    badge: "Trending",
    link: "/web?page=/websites/website-category/creative-digital/",
    
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
        text: "Manage My Products",
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
        link: "/view?page=/account/clientarea.php?action=services",
        icon: "user-list",
        theme: "bg-info-dim",
      },
   
    ],
  },
  {
    icon: "code",
    text: "Specialized Industries",
    active: false,
    link: "/web?page=/websites/website-category/specialized-industries/",
    
  },

  {
    icon: "wallet-saving",
    text: "Online Business Models",
    active: false,
    link: "/web?page=/websites/website-category/online-business-models/",
    
  },
  
  
  
  {
    heading: "Manage Account",
  },
  {
    icon: "user-alt",
    text: "Account Dashboard",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "wallet-saving",
    text: "Manage Billing",
    active: false,
    subMenu: [
      {
        text: "My Invoices",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
      {
        text: "My Orders",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
      {
        text: "My Quotes",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
      {
        text: "Mass Payment",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
      {
        text: "Add Funds",
        link: "/view?page=/account/clientarea.php?action=services",
        
      },
    ],
  },
  {
    icon: "invest",
    text: "Manage Orders",
    active: false,
    
  },
  {
    icon: "briefcase",
    text: "Affiliate Partners",
    active: false,
    subMenu: [
      {
        text: "Partner Dashboard",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "My Commissions",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "My Payouts",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "Link Generator",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "How it Works",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "Client Area",
        link: "/view?page=/account/clientarea.php?action=services",
      },

    ],
  },
  {
    icon: "user-list-fill",
    text: "Contacts and Users",
    active: false,
    subMenu: [
      {
        text: "Manage Users",
        link: "/view?page=/account/clientarea.php?action=services",
      },
      {
        text: "Manage Contacts",
        link: "/nioicon",
      },
      
    ],
  },
  {
    heading: "Help & Information",
  },
  {
    icon: "question",
    text: "Open Support Ticket",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "inbox-in",
    text: "My Support Tickets",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  
  {
    icon: "play-circle",
    text: "Video Tutorials",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "info",
    text: "Knowledgebase",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "calendar-alt",
    text: "Announcements",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "live",
    text: "Network Status",
    link: "/view?page=/account/clientarea.php?action=services",
    active: false,
    
  },
  {
    icon: "file-docs",
    text: "Terms of Service",
    link: "/view?page=/account/clientarea.php?action=services",
    
  },
  {
    icon: "eye",
    text: "Privacy Policy",
    link: "/view?page=/account/clientarea.php?action=services",
    
  },
  {
    icon: "focus",
    text: "Cookie Policy",
    link: "/view?page=/account/clientarea.php?action=services",
    active: "false",
  },
  
];
export default menu;
