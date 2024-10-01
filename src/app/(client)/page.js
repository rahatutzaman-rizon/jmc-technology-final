import Banner from "../components/homepage/banner";
import Glance from "../components/homepage/glance";
import Service from "../components/homepage/service";
import ServicesTabs from "../components/homepage/services";
import TestimonialPage from "../components/homepage/testimonials";
import MissionVision from "../components/homepage/vision";

export default function Home() {
  return (
   <div>

<Banner></Banner>
<MissionVision></MissionVision>
<Service></Service>
<ServicesTabs></ServicesTabs>
<Glance></Glance>
{/* <TestimonialPage></TestimonialPage> */}



   </div>

   
  );
}
