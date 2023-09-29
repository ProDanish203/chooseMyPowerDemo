
const page = ({params}: {params: {zip: string}}) => {

    const zip = params.zip

  return (
    <section className="pt-40 md:px-10 px-4 w-screen ">
        
        <h3 className="text-lg">Showing all the available providers for the zip code: <span className="text-primary font-semibold">{zip}</span></h3>

    </section>
  )
}


export default page;