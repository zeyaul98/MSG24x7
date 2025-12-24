import React from 'react'
import WhatsappFeedback from '../components/whatappFeedback'

const Five = () => {
    const reviews = [
    {
      id: 1,
      title: "Exceptional Service and Support",
      text: "I’m really happy with the service from MSG24x7. They helped me set up the WhatsApp Business API quickly and made sure everything was working perfectly. Their support was great, and the pricing is very reasonable. Special thanks to Jabir for this.",
      name: "Vansh Shrivastava",
      rating: 5,
    },
    {
      id: 2,
      title: "Professional Team",
      text: "Very professional team specially Mr. Jabir Azad. They are helping with WA API on very reasonable fees. They are cooperative, informative and supportive since I came to this company. I am happy to deal with you guys. All the best.",
      name: "Prachi Choudhary",
      rating: 5,
    },
    {
      id: 3,
      title: "Best WhatsApp Official Platform",
      text: "I’m really happy with MSG24x7’s WhatsApp API and its functionality. The support from Rashid Ahmed has been excellent throughout the process. Highly recommend!",
      name: "Arnab Godino",
      rating: 5,
    },
  ];
  return (
    <div className='bg-black px-6 py-20 text-white'>
        <WhatsappFeedback />
        
      <div className="mx-auto max-w-7xl">
        
        
        <h2 className="mb-14 text-center text-3xl font-bold sm:text-4xl">
          What our Customers say about us
        </h2>

        
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-700 bg-black p-6"
            >
              
              <div className="mb-4 flex gap-1 text-green-500">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

             
              <h3 className="mb-3 text-lg font-semibold">
                {item.title}
              </h3>

              
              <p className="mb-6 text-sm leading-relaxed text-gray-400">
                {item.text}
              </p>

              
              <p className="text-sm font-medium text-blue-400">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    
    </div>
  )
}

export default Five