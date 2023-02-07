import Image from 'next/image';
import Layout from '../components/layout';

export default function Images(){
    return (
        <Layout>
            <img src="/images/test.jpg" alt="Image" width="500" height="500"/><br/>
            <Image
                src="/images/test.jpg" // Route of the image file
                height={500} // Desired size with correct aspect ratio
                width={500} // Desired size with correct aspect ratio
                alt="Image"
            />
        </Layout>
    )
}