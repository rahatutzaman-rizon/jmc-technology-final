import Banner from "../components/homepage/banner";
import HonorableClientsPage from "../components/homepage/client";
import Glance from "../components/homepage/glance";
import Service from "../components/homepage/service";
import ServicesTabs from "../components/homepage/services";
import Testimonials from "../components/homepage/testimonials";
import MissionVision from "../components/homepage/vision";

export default function Home() {
  return (
   <div>

  <Banner></Banner>
  <Glance></Glance>
<MissionVision></MissionVision>
<Service></Service>
<ServicesTabs></ServicesTabs>

<Testimonials></Testimonials>
<HonorableClientsPage></HonorableClientsPage>



   </div>

   
  );
}
