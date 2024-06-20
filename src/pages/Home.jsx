import Layout from "../components/Layout"
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner from "../assets/banner.png"

function Home() {
   
    return (
            <Layout >
                <Banner 
                title="Chez vous, partout et ailleurs"
                imageUrl={banner}
                customWrapperStyle="home-banner-wrapper"
                customImageStyle="home-banner-image"
                />
                <Gallery />
            </Layout>
    )
}

export default Home;

