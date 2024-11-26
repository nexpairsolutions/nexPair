import { useState } from "react";
import img1 from '../../assets/images/image1.svg';
import img2 from '../../assets/images/email_workflow.svg';
import img3 from '../../assets/images/file_upload.svg';
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';

const clients = [
  { src: client1, alt: 'Client 1' },
  { src: client2, alt: 'Client 2' },
  { src: client3, alt: 'Client 3' },
  { src: client4, alt: 'Client 4' },
  { src: client5, alt: 'Client 5' },
  { src: client1, alt: 'Client 5' }
];

const cardDetails = [
  { img: img1, title: "Live messaging", desc: "Downs those still witty an balls so chief so." },
  { img: img2, title: "Email workflow", desc: "Moment an little remain no lively. Cultivated an up solicitude." },
  { img: img3, title: "File upload", desc: "Cultivated an up solicitude. Downs those still witty an balls." }
];

function AboutUs() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="about-us-container">
      <h4 className="font-bold uppercase text-[#4ac4f3] mt-[50px] text-[18px]">About Us</h4>
      <h2 className="font-bold mb-[25px] text-[26px]">What is Softing?</h2>
      
      <div className="flex justify-center">
        <p className="text-[#666666] mb-[15px] normal-case font-normal max-w-[600px] text-center">
          Ignorant saw her her drawings marriage laughter. Case oh an that or
          away sigh do here upon. Acuteness you exquisite ourselves now end
          forfeited. Enquire ye without it garrets up himself. Interest our
          nor received followed was. Cultivated an up solicitude mr
          unpleasant.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cardDetails.map((card, index) => (
          <div key={index} className="max-w-sm w-full sm:w-80 md:w-96 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg bg-white p-6">
            <div className="item text-center">
              <div className="flex justify-center mb-4">
                <img src={card.img} alt={`${card.title} icon`} className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold mb-4">{card.title}</h4>
              <p className="text-[#666666]">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* First Row: Heading and Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Trusted by the world's best Companies
            </h3>
            <p className="text-center text-[#666666] max-w-[800px] mx-auto">
              Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
            </p>
          </div>

          {/* Second Row: Owl Carousel Section */}
          <div className="owl-carousel owl-theme text-center">
            <div className="owl-stage-outer">
              <div className="owl-stage flex overflow-x-auto gap-6">
                {clients.map((client, index) => (
                  <div key={index} className="owl-item flex-shrink-0 w-40">
                    <div className="single-item">
                      <a href="#">
                        <img src={client.src} alt={client.alt} className="mx-auto" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="owl-nav flex justify-between mt-4">
              <button type="button" className="owl-prev bg-gray-200 p-2 rounded-full">
                <i className="fa fa-angle-left text-xl"></i>
              </button>
              <button type="button" className="owl-next bg-gray-200 p-2 rounded-full">
                <i className="fa fa-angle-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
