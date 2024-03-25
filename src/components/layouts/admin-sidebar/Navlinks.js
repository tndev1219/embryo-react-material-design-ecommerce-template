/**
 *  admin sidebar menu
 */
/* eslint-disable */
export default [
   {
      "menu_title": "reports",
      "type": "null",
      "path": "/admin-panel/admin/reports",
      "icon": "poll",
      "child_routes": null
   },
   {
      "menu_title": "invoices",
      "type": "null",
      "path": "/admin-panel/admin/invoices",
      "icon": "recent_actors",
      "child_routes": null
   },
   {
      "menu_title": "products",
      "type": "subMenu",
      "path": "javascript:void(0)",
      "icon": "shopping_cart",
      "child_routes": [
         {
            "path": "/admin-panel/admin/products",
            "menu_title": "products",
            "icon": "arrow_right_alt"
         },
         {
            "path": "/admin-panel/admin/product-add",
            "menu_title": "product add",
            "icon": "arrow_right_alt"
         }
      ]
   },
   {
      "menu_title": "profile",
      "type": "null",
      "path": "/admin-panel/admin/account",
      "icon": "account_circle",
      "child_routes": null
   },
   {
      "menu_title": "go to site",
      "type": "null",
      "path": "/",
      "icon": "home",
      "child_routes": null
   },
]   