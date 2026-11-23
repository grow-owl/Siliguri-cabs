export const siteConfig = {
  brandName: "HillWay Cabs",
  tagline: "Your Journey, Our Responsibility.",
  subTagline: "Premium Cab, Outstation & Bagdogra Airport Transfers in Siliguri",
  phone: "+91 77191 99000",
  phoneRaw: "+917719199000",
  whatsappNumber: "917719199000",
  email: "bookings@hillwaycabs.com",
  address: "Near Junction & NJP, Sevoke Road, Siliguri, West Bengal 734001",
  rating: "4.9",
  reviewsCount: "1,450+",
  tripsCompleted: "28,000+",
  yearsExperience: "12+"
};

export const generateWhatsAppLink = ({
  pickup = "",
  destination = "",
  date = "",
  passengers = "1-4",
  vehicle = "Any / Best Available",
  tripType = "Outstation Trip"
}) => {
  const text = `*New Ride Enquiry — HillWay Cabs* 🚖
------------------------------------
*Service Type:* ${tripType}
*Pickup:* ${pickup || 'Siliguri / Bagdogra'}
*Destination:* ${destination || 'Not Specified'}
*Travel Date:* ${date || 'Flexible / Today'}
*Passengers:* ${passengers}
*Preferred Vehicle:* ${vehicle}

Hello HillWay team, please confirm cab availability, route duration, and the best all-inclusive fare. Thank you!`;

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
