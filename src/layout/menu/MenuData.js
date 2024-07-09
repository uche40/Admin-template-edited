const menu = [
  {
    heading: "Quick Links",
  },
  {
    icon: "dashboard",
    text: "Billing Dashboard",
    link: "/view?page=/account/clientarea.php",
    dashboard: true,
  },
  {
    icon: "account-setting",
    text: "Register Account",
    badge: "Free",
    link: "/view?page=/account/register.php",
    dashboard: true,
  },
  {
    icon: "template",
    text: "Discover Products",
    link: "/view?page=/cms/products/",
    dashboard: true,
  },
  {
    icon: "cc-new",
    text: "Make Payment",
    link: "/view?page=/account/clientarea.php?action=invoices",
    dashboard: true,
  },
  {
    heading: "Products ",
  },
  {
    icon: "reports-alt",
    text: "All Products",
    link: "/invest",
    dashboard: true,
  },
  {
    icon: "sun",
    text: "Website Creation",
    active: false,
    subMenu: [
      {
        text: "SiteHub ",
        link: "/view?page=/cms/sitehub/",
      },
      {
        text: "Corporate Websites",
        link: "/project-list",
      },
      {
        text: "Blogs and Personal Sites",
        link: "/project-list",
      },
      {
        text: "Landing Pages",
        link: "/project-list",
      },
      {
        text: "Website Templates",
        link: "/project-list",
      },
    ],
  },
  {
    icon: "color-palette",
    text: "Image Creation",
    active: false,
    subMenu: [
      {
        text: "Graphic Design Tools",
        link: "/user-list-regular",
      },
      {
        text: "Photo Editing Software",
        link: "/user-list-compact",
      },
      {
        text: "Infographic Creators",
        link: "/user-details-regular/1",
      },
      {
        text: "Illustration Tools",
        link: "/user-profile-regular",
      },
      {
        text: "Graphics Templates",
        link: "/user-contact-card",
      },
    ],
  },
  {
    icon: "play-circle",
    text: "Video Creation",
    badge: "New",
    active: false,
    subMenu: [
      {
        text: "Video Editing Software",
        link: "/kyc-list-regular",
      },
      {
        text: "Animation Software",
        link: "/kyc-list-regular",
      },
      {
        text: "Motion Graphics",
        link: "/kyc-list-regular",
      },
      {
        text: "Video Templates",
        link: "/kyc-details-regular/UD01544",
      },
    ],
  },
  {
    icon: "clock",
    text: "Business Software",
    active: false,
    subMenu: [
      {
        text: "Music Production Software",
        link: "/transaction-basic",
      },
      {
        text: "Audio Editing Tools",
        link: "/transaction-basic",
      },
      {
        text: "Podcast Tools",
        link: "/transaction-basic",
      },
      {
        text: "Nosubsidebar",
        link: "/Nosubsidebar",
      },

  
    ],
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
    text: "Development and IT",
    active: false,
    subMenu: [
      {
        text: "Web Development Tools",
        link: "/product-list",
      },
      {
        text: "Database Management",
        link: "/product-card",
      },
      {
        text: "DevOps Tools",
        link: "/product-details/0",
      },
      {
        text: "Mobile App Development",
        link: "/product-details/0",
      },
      {
        text: "Cybersecurity Tools",
        link: "/product-details/0",
      },
    ],
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
