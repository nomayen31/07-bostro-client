import img1 from '../../../assets/home/chef-service.jpg';
import './PromotionImage.css'
const PromotionImage = () => {
    return (
        <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0">
            <img className="object-cover w-full h-full" src={img1} alt="" />
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>
    
        <div className="relative max-w-lg px-4 mx-auto sm:px-0 center">
            <div className="overflow-hidden bg-white rounded-md shadow-md size">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 m-10">Bistro Boss</h2>
                        <p className="mt-2 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, <br /> nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default PromotionImage;