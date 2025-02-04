import { Phone, Mail, MessageCircle, Instagram, Twitter, Facebook, MapPin, Clock, ArrowUpRight } from "lucide-react"

const Contact = () => {
    const contactMethods = [
        {
            id: 1,
            title: "Call Us",
            icon: Phone,
            items: ["+254 722 659 725", "+254 748 496 414"],
            action: "tel:+254720424209",
            color: "bg-blue-50 text-blue-600",
            hoverColor: "hover:bg-blue-100",
        },
        {
            id: 2,
            title: "WhatsApp",
            icon: MessageCircle,
            items: ["+254 722 659 725", "+254 748 496 414"],
            action: "https://wa.me/254720434209",
            color: "bg-green-50 text-green-600",
            hoverColor: "hover:bg-green-100",
        },
        {
            id: 3,
            title: "Email Us",
            icon: Mail,
            items: ["info@eakhalimited.co.ke", "sales@eakhalimited.co.ke"],
            action: "mailto:info@eakhalimited.co.ke",
            color: "bg-purple-50 text-purple-600",
            hoverColor: "hover:bg-purple-100",
        },
        {
            id: 4,
            title: "Instagram",
            icon: Instagram,
            items: ["@eakhalimited", "Follow us for updates"],
            action: "https://instagram.com/eakhalimited",
            color: "bg-pink-50 text-pink-600",
            hoverColor: "hover:bg-pink-100",
        },
        {
            id: 5,
            title: "X (Twitter)",
            icon: Twitter,
            items: ["@eakhalimited", "Follow us for updates"],
            action: "https://twitter.com/eakhalimited",
            color: "bg-gray-50 text-gray-600",
            hoverColor: "hover:bg-gray-100",
        },
        {
            id: 6,
            title: "Facebook",
            icon: Facebook,
            items: ["Eakha Limited", "Like our page"],
            action: "https://facebook.com/eakhalimited",
            color: "bg-indigo-50 text-indigo-600",
            hoverColor: "hover:bg-indigo-100",
        },
        {
            id: 7,
            title: "Visit Us",
            icon: MapPin,
            items: ["Luthuli River Road Junction", "Three Ways Building, 1st Floor"],
            action: "https://maps.google.com/?q=your-address",
            color: "bg-red-50 text-red-600",
            hoverColor: "hover:bg-red-100",
        },
        {
            id: 8,
            title: "Business Hours",
            icon: Clock,
            items: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
            color: "bg-amber-50 text-amber-600",
            hoverColor: "hover:bg-amber-100",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">Get in touch with us through any of these platforms</p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {contactMethods.map((method) => (
                        <div
                            key={method.id}
                            className={`relative group border rounded-xl ${method.color} p-6 transition-all duration-200 ${method.action ? "cursor-pointer" : ""} ${method.hoverColor}`}
                        >
                            {method.action && (
                                <a
                                    href={method.action}
                                    rel="noopener noreferrer"
                                    className="absolute inset-0"
                                    aria-label={`Contact via ${method.title}`}
                                />
                            )}

                            <div className="flex items-center justify-between mb-4">
                                <method.icon className="w-8 h-8" />
                                {method.action && (
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                            </div>

                            <h3 className="text-lg font-semibold mb-4">{method.title}</h3>

                            <div className="space-y-2">
                                {method.items.map((item, index) => (
                                    <p key={index} className="text-sm">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8172497417363!2d36.8291343!3d-1.2835196000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11295e2300a5%3A0x8bcc9f51af3ce440!2sThree%20Ways%20Building%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1738259126405!5m2!1sen!2ske"
                            width="100%"
                            height="500px"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Location"
                        ></iframe>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

