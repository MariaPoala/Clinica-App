/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client"
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const orders = [
  {
    id: 1,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    status: 'out-for-delivery',
    productName: 'Kicks Carrier',
    href: '#',
    imageSrc: 'https://uees.edu.ec/wp-content/uploads/2021/07/Medicina-main.jpg',
    imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
  },
  {
    id: 2,
    date: 'June 21, 2021',
    datetime: '2021-06-21',
    status: 'delivered',
    productName: 'Micro Backpack',
    href: '#',
    imageSrc: 'https://www.udep.edu.pe/admision/lima/wp-content/uploads/2018/01/medicina1.jpg',
    imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
  },
  {
    id: 3,
    date: 'June 6, 2021 nueva clinica ortega',
    datetime: '2021-06-06',
    status: 'cancelled',
    productName: 'Drawtop Canister',
    href: '#',
    imageSrc: 'https://blogs.ucontinental.edu.pe/wp-content/uploads/2016/10/medicina_humana.jpg',
    imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',
  },
  {
    id: 4,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivered',
    productName: 'High Wall Tote',
    href: '#',
    imageSrc: 'https://www.unc.edu.pe/wp-content/uploads/2021/09/banner-programa-mh.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  // More orders...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicioPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">



      <main
        className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="max-w-xl">
          <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900">
            Servicio
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover similar products.
          </p>
        </div>
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {orders.map((order) => (
            <div key={order.id} className="group relative bg-slate-100 ">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img src={order.imageSrc} alt={order.imageAlt} className="object-cover object-center" />
              </div>
              <div className=' divide-y divide-slate-900/10 ml-2 mr-2  '>
                <h3 className="mt-4 text-sm text-gray-500 text-center">
                  <a href={order.href}>
                    <span className="absolute inset-0" />
                    {order.productName}
                  </a>
                </h3>
                <p className="mt-1 text-lg font-medium h-14">
                  <span className="text-blue-800">
                    Delivered on <time dateTime={order.datetime}>{order.date}</time>
                  </span>
                </p>
                {/* ajustar contenido abajo */}
                <div className="mt-2 border-t border-gray-900/5 flex justify-end">
                  <a href="#" className="text-sm font-semibold leading-6 text-blue-500 ">
                    Reservar Cita <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
