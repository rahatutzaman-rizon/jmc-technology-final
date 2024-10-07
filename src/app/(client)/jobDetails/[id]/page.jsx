import JobDetailsPageComp from "@/components/careerPage/JobDetailsPageComp";

// generateStaticParams

export async function generateStaticParams() {
  const { jobs } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/job/list`
  ).then((res) => res.json());
  const staticParams4JobDetails = jobs.map((job) => ({
    id: job._id.toString(),
  }));
  console.log(staticParams4JobDetails);
  return staticParams4JobDetails;
}

// fetchJobById from https://jmctl-api.bdcare.vip/api/job/view/2

export async function fetchJobById(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL_JMC_TECHNOLOGY}/api/job/${id}`
  );
  const data = await res.json();
  return data.data;
}

const JobDetailsPage = async ({ params }) => {
  const job = await fetchJobById(params.id);
  return (
    <section>
      <JobDetailsPageComp job={job} />
    </section>
  );
};

export default JobDetailsPage;
