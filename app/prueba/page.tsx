"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const products = [
    {
        id: 1,
        name: 'Anatomía Patológica',
        href: '#',
        color: 'Laboratorio',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/un-algoritmo-delimita-automaticamente-tumores-cerebrales-en-imagenes-medicas/2607428-9-esl-MX/Un-algoritmo-delimita-automaticamente-tumores-cerebrales-en-imagenes-medicas.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Cardiología Clínica',
        href: '#',
        color: 'Laboratorio',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://clinic-cloud.com/wp-content/uploads/2015/11/banco-de-imagenes-medicas-640x450.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Anatomía Patológica',
        href: '#',
        color: 'Laboratorio',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/un-algoritmo-delimita-automaticamente-tumores-cerebrales-en-imagenes-medicas/2607428-9-esl-MX/Un-algoritmo-delimita-automaticamente-tumores-cerebrales-en-imagenes-medicas.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 4,
        name: 'Cardiología Clínica',
        href: '#',
        color: 'Laboratorio',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://clinic-cloud.com/wp-content/uploads/2015/11/banco-de-imagenes-medicas-640x450.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export default function EspecialidadPage() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="mt-2">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">MDCO {product.quantity}</p>

                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-blue-600 hover:text-blue-500"
                                                    >
                                                        Reservar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
