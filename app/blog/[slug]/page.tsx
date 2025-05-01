"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

// Sample blog post data - in a real app, this would come from a CMS or API
const blogPostsData = [
  {
    id: 1,
    title: "Advances in Molecular Analysis Techniques",
    excerpt: "Exploring the latest breakthroughs in molecular analysis and their implications for scientific research.",
    content: `
      <p>The field of molecular analysis has seen remarkable advancements in recent years, revolutionizing how scientists approach research across various disciplines. These innovations have not only enhanced the precision and efficiency of analytical methods but have also opened new avenues for scientific exploration.</p>
      
      <h2>Next-Generation Sequencing Technologies</h2>
      <p>One of the most significant breakthroughs in molecular analysis has been the development of next-generation sequencing (NGS) technologies. Unlike traditional sequencing methods, NGS allows for the parallel sequencing of millions of DNA fragments, dramatically reducing both the time and cost associated with genomic analysis.</p>
      <p>Recent improvements in NGS platforms have further enhanced their capabilities, with some systems now able to generate terabases of data in a single run. This has made whole-genome sequencing more accessible to researchers and has facilitated large-scale genomic studies that were previously unfeasible.</p>
      
      <h2>Single-Cell Analysis</h2>
      <p>Another revolutionary advancement is the emergence of single-cell analysis techniques. Traditional molecular methods often require bulk samples, which can mask the heterogeneity present within cell populations. Single-cell analysis overcomes this limitation by enabling the examination of individual cells, providing unprecedented insights into cellular diversity and behavior.</p>
      <p>Applications of single-cell analysis span various fields, from cancer research to developmental biology. In oncology, for instance, these techniques have revealed the complex cellular composition of tumors, helping researchers understand the mechanisms of drug resistance and develop more effective therapeutic strategies.</p>
      
      <h2>CRISPR-Based Diagnostic Tools</h2>
      <p>The CRISPR-Cas system, renowned for its gene-editing capabilities, has also been adapted for molecular diagnostics. CRISPR-based diagnostic tools, such as SHERLOCK and DETECTR, offer highly sensitive and specific detection of nucleic acids, making them valuable for identifying pathogens and genetic mutations.</p>
      <p>These tools have shown particular promise in point-of-care diagnostics, where their simplicity, speed, and cost-effectiveness provide advantages over traditional diagnostic methods. During the COVID-19 pandemic, for example, CRISPR-based tests were developed for the rapid detection of SARS-CoV-2, demonstrating their potential in addressing global health challenges.</p>
      
      <h2>Implications for Scientific Research</h2>
      <p>The advancements in molecular analysis techniques have profound implications for scientific research. They have not only enhanced our understanding of biological systems but have also accelerated the pace of discovery across multiple disciplines.</p>
      <p>In medicine, these technologies are driving the development of precision therapies tailored to individual patients based on their genetic profiles. In environmental science, they are enabling the comprehensive analysis of complex ecosystems, from soil microbiomes to marine environments.</p>
      <p>Moreover, the integration of molecular analysis with other cutting-edge technologies, such as artificial intelligence and nanotechnology, is creating new synergies and expanding the frontiers of scientific inquiry.</p>
      
      <h2>Conclusion</h2>
      <p>As molecular analysis techniques continue to evolve, they will undoubtedly play an increasingly central role in scientific research. By providing deeper insights into the molecular basis of life, these advancements are not only enhancing our understanding of the natural world but are also addressing some of the most pressing challenges facing humanity, from disease to environmental sustainability.</p>
      <p>The future of molecular analysis looks promising, with ongoing innovations poised to further transform the scientific landscape and open new possibilities for discovery and application.</p>
    `,
    date: "April 15, 2023",
    author: "Dr. Elena Rodriguez",
    category: "Research",
    readTime: "8 min read",
    image: "/laboratory-equipment.png",
    slug: "advances-in-molecular-analysis",
    tags: ["Molecular Analysis", "Research", "Technology", "Science"],
  },
  {
    id: 2,
    title: "The Future of Scientific Instrumentation",
    excerpt: "How emerging technologies are transforming laboratory equipment and research capabilities.",
    content: `
      <p>Scientific instrumentation is undergoing a profound transformation, driven by advances in technology and changing research needs. From automated systems to miniaturized devices, these innovations are reshaping how scientists conduct experiments and analyze data.</p>
      
      <h2>Automation and Robotics</h2>
      <p>Laboratory automation has emerged as a game-changer in scientific research. Robotic systems can now perform complex experimental procedures with precision and consistency, reducing human error and increasing throughput. High-throughput screening platforms, for instance, can test thousands of compounds in a fraction of the time it would take using manual methods.</p>
      <p>Beyond simple task automation, we're seeing the rise of fully automated laboratories where robotic arms and conveyor systems move samples between different instruments, creating seamless workflows from sample preparation to analysis. These "lab of the future" setups are particularly valuable in applications requiring continuous operation or handling hazardous materials.</p>
      
      <h2>Miniaturization and Portability</h2>
      <p>Another significant trend is the miniaturization of scientific instruments. Advances in microfluidics and nanotechnology have enabled the development of lab-on-a-chip devices that integrate multiple laboratory functions on a single chip measuring just millimeters or centimeters in size.</p>
      <p>These miniaturized systems offer numerous advantages, including reduced sample and reagent consumption, faster analysis times, and enhanced portability. Portable instruments are particularly valuable for fieldwork, point-of-care diagnostics, and research in resource-limited settings.</p>
      
      <h2>AI and Machine Learning Integration</h2>
      <p>Artificial intelligence (AI) and machine learning are increasingly being integrated into scientific instrumentation, enhancing data analysis capabilities and enabling new applications. AI algorithms can identify patterns in complex datasets, automate image analysis, and even predict experimental outcomes.</p>
      <p>In microscopy, for example, machine learning algorithms can automatically identify and classify cellular structures, saving researchers countless hours of manual analysis. Similarly, in mass spectrometry, AI can help identify unknown compounds by comparing their spectral signatures to vast databases.</p>
      
      <h2>Internet of Things (IoT) and Connected Labs</h2>
      <p>The Internet of Things (IoT) is transforming laboratories into connected environments where instruments can communicate with each other and with researchers. IoT-enabled devices can transmit data in real-time, allowing for remote monitoring of experiments and equipment status.</p>
      <p>Connected labs also facilitate collaboration by enabling researchers to share data and resources across different locations. Cloud-based platforms can store and process large datasets, making them accessible to team members regardless of their physical location.</p>
      
      <h2>Implications for Research</h2>
      <p>These advancements in scientific instrumentation have profound implications for research across various disciplines. They are not only enhancing the efficiency and reproducibility of experiments but are also enabling new types of investigations that were previously unfeasible.</p>
      <p>For instance, high-resolution imaging techniques are providing unprecedented insights into cellular structures and molecular interactions. Similarly, sensitive analytical instruments are allowing researchers to detect and quantify substances at ever-lower concentrations, advancing fields from environmental monitoring to biomarker discovery.</p>
      
      <h2>Conclusion</h2>
      <p>As we look to the future, scientific instrumentation will continue to evolve, driven by technological innovation and the changing needs of researchers. The integration of advanced technologies like AI, robotics, and IoT will further enhance the capabilities of laboratory equipment, opening new frontiers in scientific discovery.</p>
      <p>While these advancements bring exciting possibilities, they also present challenges, including the need for specialized training, data management strategies, and considerations around accessibility and equity in research. Addressing these challenges will be crucial to fully realizing the potential of next-generation scientific instrumentation.</p>
    `,
    date: "March 22, 2023",
    author: "Dr. Michael Chen",
    category: "Technology",
    readTime: "10 min read",
    image: "/placeholder.svg?key=7y81e",
    slug: "future-of-scientific-instrumentation",
    tags: ["Instrumentation", "Technology", "Automation", "Research"],
  },
  {
    id: 3,
    title: "Sustainable Practices in Laboratory Settings",
    excerpt: "Implementing eco-friendly approaches to scientific research without compromising quality.",
    content: `
      <p>Laboratories are essential hubs of scientific innovation, but they also consume significant resources and generate substantial waste. As environmental concerns become increasingly pressing, there's a growing movement toward implementing sustainable practices in laboratory settings without compromising research quality or safety.</p>
      
      <h2>Energy Efficiency</h2>
      <p>Laboratories are typically energy-intensive environments, with equipment like freezers, incubators, and fume hoods consuming large amounts of electricity. Implementing energy-efficient alternatives and practices can significantly reduce a lab's carbon footprint.</p>
      <p>Ultra-low temperature freezers, for instance, can be set to -70°C instead of -80°C without compromising sample integrity in most cases, resulting in up to 40% energy savings. Similarly, closing fume hood sashes when not in use can dramatically reduce energy consumption associated with ventilation systems.</p>
      
      <h2>Water Conservation</h2>
      <p>Water is another resource used abundantly in laboratories, from cooling equipment to washing glassware. Water-efficient equipment, such as recirculating vacuum pumps instead of water aspirators, can substantially reduce water usage.</p>
      <p>Additionally, implementing water purification systems that recycle reject water or installing low-flow fixtures can further minimize water consumption without affecting research activities.</p>
      
      <h2>Waste Reduction and Management</h2>
      <p>Laboratories generate various types of waste, including chemical, biological, and plastic waste. Adopting a comprehensive waste management strategy is crucial for reducing environmental impact.</p>
      <p>This includes implementing waste segregation protocols, exploring alternatives to hazardous chemicals, and establishing recycling programs for materials like pipette tip boxes and packaging. Some institutions have also adopted solvent recycling systems, which purify used solvents for reuse, reducing both waste generation and procurement costs.</p>
      
      <h2>Green Chemistry Principles</h2>
      <p>Green chemistry focuses on designing chemical products and processes that minimize the use and generation of hazardous substances. Applying these principles in laboratory research can lead to safer, more sustainable practices.</p>
      <p>Examples include using aqueous-based reactions instead of organic solvents when possible, employing catalysts to increase reaction efficiency, and designing synthetic routes that minimize waste generation. These approaches not only reduce environmental impact but can also enhance safety and sometimes reduce costs.</p>
      
      <h2>Sustainable Procurement</h2>
      <p>The purchasing decisions made by laboratories can significantly influence their environmental footprint. Sustainable procurement involves considering environmental factors alongside traditional criteria like cost and performance when selecting equipment and supplies.</p>
      <p>This might include choosing energy-efficient equipment, opting for products with minimal packaging, or selecting suppliers with strong environmental commitments. Some institutions have established green purchasing guidelines to facilitate sustainable procurement decisions.</p>
      
      <h2>Case Studies and Success Stories</h2>
      <p>Numerous laboratories and research institutions have successfully implemented sustainable practices, demonstrating that environmental responsibility and scientific excellence can go hand in hand.</p>
      <p>For instance, the My Green Lab certification program has helped hundreds of laboratories reduce their environmental impact through behavioral changes and sustainable practices. Similarly, the Labs21 program provides resources and guidelines for designing and operating sustainable laboratories.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing sustainable practices in laboratory settings is not just an environmental imperative but can also lead to operational benefits, including cost savings, enhanced safety, and improved public perception.</p>
      <p>While transitioning to more sustainable operations may present challenges, the growing availability of resources, guidelines, and success stories makes it increasingly feasible for laboratories of all sizes and disciplines to reduce their environmental footprint without compromising their scientific mission.</p>
      <p>As we face global environmental challenges, the scientific community has both an opportunity and a responsibility to lead by example, demonstrating that cutting-edge research and environmental stewardship can and should go hand in hand.</p>
    `,
    date: "February 10, 2023",
    author: "Dr. Sarah Johnson",
    category: "Sustainability",
    readTime: "9 min read",
    image: "/sustainable-laboratory.png",
    slug: "sustainable-laboratory-practices",
    tags: ["Sustainability", "Green Lab", "Environment", "Best Practices"],
  },
  {
    id: 4,
    title: "Data Analysis Methods for Complex Datasets",
    excerpt: "Innovative approaches to extracting meaningful insights from large and complex scientific data.",
    content: `
      <p>The exponential growth in data generation across scientific disciplines has created both opportunities and challenges for researchers. Complex datasets, characterized by their volume, variety, and velocity, require sophisticated analytical approaches to extract meaningful insights. This article explores innovative methods for analyzing complex scientific data.</p>
      
      <h2>Machine Learning Approaches</h2>
      <p>Machine learning has emerged as a powerful tool for analyzing complex datasets, offering the ability to identify patterns and relationships that might be missed by traditional statistical methods.</p>
      <p>Supervised learning algorithms, such as random forests and support vector machines, can be trained to classify data or predict outcomes based on labeled examples. These approaches have been successfully applied in various scientific contexts, from predicting protein structures to identifying biomarkers for disease.</p>
      <p>Unsupervised learning methods, including clustering algorithms and dimensionality reduction techniques like principal component analysis (PCA), are valuable for exploring data without predefined categories. These approaches can reveal natural groupings and relationships within complex datasets, guiding further investigation.</p>
      
      <h2>Network Analysis</h2>
      <p>Network analysis provides a framework for understanding complex systems by representing them as interconnected nodes and edges. This approach is particularly valuable for studying relationships and interactions within datasets.</p>
      <p>In biology, for instance, network analysis has been used to map protein-protein interactions, gene regulatory networks, and metabolic pathways. Similarly, in social sciences, it has been applied to analyze citation networks, collaboration patterns, and social interactions.</p>
      <p>Advanced network metrics and algorithms can identify key nodes, detect communities, and characterize the overall structure of networks, providing insights into the underlying systems they represent.</p>
      
      <h2>Time Series Analysis</h2>
      <p>Many scientific datasets include temporal components, requiring specialized methods for analysis. Time series analysis encompasses various techniques for examining data points collected over time.</p>
      <p>Traditional approaches include autoregressive integrated moving average (ARIMA) models, which can capture trends and seasonal patterns in time series data. More recent developments, such as recurrent neural networks (RNNs) and long short-term memory (LSTM) networks, offer enhanced capabilities for modeling complex temporal dependencies.</p>
      <p>These methods have applications ranging from climate science, where they can analyze temperature trends and predict weather patterns, to neuroscience, where they can help understand brain activity patterns over time.</p>
      
      <h2>Spatial Data Analysis</h2>
      <p>Spatial data, which includes geographic coordinates or other spatial references, requires specialized analytical approaches. Geographic information systems (GIS) provide tools for visualizing and analyzing spatial data, while spatial statistics offer methods for identifying patterns and relationships based on geographic proximity.</p>
      <p>Advanced techniques like geographically weighted regression can model relationships that vary across space, accounting for local variations that might be missed by global models. These approaches are valuable in fields such as ecology, epidemiology, and environmental science.</p>
      
      <h2>Integration of Multiple Data Types</h2>
      <p>Many scientific questions require the integration of different types of data, such as genomic, proteomic, and clinical data in biomedical research. Multi-omics approaches aim to combine these diverse datasets to gain a more comprehensive understanding of biological systems.</p>
      <p>Methods for data integration include statistical approaches like canonical correlation analysis, machine learning techniques such as multi-view learning, and network-based methods that can represent relationships across different data types.</p>
      <p>These integrative approaches are increasingly important as researchers seek to understand complex phenomena that cannot be fully captured by any single type of data.</p>
      
      <h2>Visualization Techniques</h2>
      <p>Data visualization is a crucial component of complex data analysis, helping researchers identify patterns, communicate findings, and generate new hypotheses. Advanced visualization techniques go beyond basic charts and graphs to represent multidimensional and complex data effectively.</p>
      <p>Interactive visualizations allow users to explore data dynamically, adjusting parameters and focusing on areas of interest. Similarly, immersive technologies like virtual reality can provide new ways to interact with and understand complex datasets.</p>
      
      <h2>Conclusion</h2>
      <p>As scientific data continues to grow in volume and complexity, innovative analytical methods will be increasingly important for extracting meaningful insights. The approaches discussed here represent just a fraction of the tools available to researchers facing the challenges of complex data analysis.</p>
      <p>The most effective strategies often involve combining multiple methods and adapting them to the specific characteristics and requirements of the dataset at hand. Additionally, collaboration between domain experts and data scientists can enhance the relevance and interpretability of analytical results.</p>
      <p>By embracing these innovative approaches and continuing to develop new methods, researchers can harness the full potential of complex datasets to advance scientific knowledge and address pressing challenges across disciplines.</p>
    `,
    date: "January 28, 2023",
    author: "Dr. Aisha Patel",
    category: "Data Science",
    readTime: "12 min read",
    image: "/data-analysis-visual.png",
    slug: "data-analysis-complex-datasets",
    tags: ["Data Science", "Analysis", "Big Data", "Machine Learning"],
  },
  {
    id: 5,
    title: "Collaborative Research in the Digital Age",
    excerpt: "How digital tools and platforms are enabling unprecedented collaboration in scientific research.",
    content: `
      <p>The landscape of scientific research has been transformed by digital technologies, enabling collaboration on a scale and scope previously unimaginable. From cloud-based platforms to virtual laboratories, these tools are breaking down geographical barriers and accelerating the pace of discovery.</p>
      
      <h2>Cloud-Based Collaboration Platforms</h2>
      <p>Cloud-based platforms have revolutionized how researchers collaborate, providing shared spaces for data storage, analysis, and communication. Services like Google Workspace, Microsoft Teams, and specialized scientific platforms allow team members to work on projects simultaneously, regardless of their physical location.</p>
      <p>These platforms typically offer version control, which tracks changes to documents and data, ensuring that all collaborators are working with the most current information. Additionally, they often include permission settings that allow project leaders to control access to sensitive data, addressing security and privacy concerns.</p>
      
      <h2>Open Science Initiatives</h2>
      <p>The open science movement, facilitated by digital tools, promotes transparency and accessibility in research. Platforms like Open Science Framework (OSF) and Zenodo enable researchers to share not only their findings but also their methodologies, data, and even negative results.</p>
      <p>Preprint servers such as arXiv and bioRxiv allow scientists to share their work before formal peer review, accelerating the dissemination of knowledge and inviting feedback from a broader community. Similarly, open access journals make published research freely available to readers worldwide, expanding its reach and potential impact.</p>
      
      <h2>Virtual Laboratories and Remote Experimentation</h2>
      <p>Virtual laboratories and remote experimentation systems are extending collaborative possibilities beyond data sharing to include actual experimental work. These platforms allow researchers to control laboratory equipment remotely, conduct experiments, and analyze results from anywhere in the world.</p>
      <p>For instance, some telescopes and microscopes can now be operated remotely, enabling astronomers and microscopists to conduct observations without being physically present at the facility. Similarly, virtual reality (VR) and augmented reality (AR) technologies are creating immersive environments where scientists can visualize and interact with complex data or simulations collaboratively.</p>
      
      <h2>Citizen Science Platforms</h2>
      <p>Digital platforms have also enabled the growth of citizen science, where members of the public contribute to scientific research. Websites and mobile apps like Zooniverse, eBird, and Foldit engage volunteers in tasks ranging from classifying galaxies to reporting wildlife sightings to solving protein folding puzzles.</p>
      <p>These initiatives not only generate valuable data but also foster public engagement with science and provide educational opportunities. The distributed nature of citizen science allows for the collection of data across vast geographical areas and time periods, supporting research that would be impractical for professional scientists alone.</p>
      
      <h2>Collaborative Writing and Publishing Tools</h2>
      <p>The process of writing and publishing scientific papers has been transformed by collaborative digital tools. Platforms like Overleaf and Authorea allow multiple authors to work on manuscripts simultaneously, with features specifically designed for scientific writing, such as LaTeX support and reference management.</p>
      <p>These tools often integrate with citation managers like Zotero and Mendeley, streamlining the process of organizing and formatting references. Additionally, some journals now offer collaborative peer review platforms, where reviewers can discuss their assessments and authors can respond to feedback in a structured online environment.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While digital collaboration tools offer numerous benefits, they also present challenges that researchers must navigate. Data security and privacy concerns are paramount, particularly when working with sensitive information such as patient data or proprietary research.</p>
      <p>Additionally, digital divides based on factors like geography, institutional resources, and technical expertise can create inequities in who can participate in collaborative research. Addressing these disparities requires intentional efforts to ensure that collaborative tools and platforms are accessible and usable for researchers across different contexts.</p>
      
      <h2>Future Directions</h2>
      <p>Looking ahead, emerging technologies promise to further enhance collaborative research capabilities. Blockchain technology, for instance, could provide secure and transparent ways to track contributions to collaborative projects and manage shared data.</p>
      <p>Artificial intelligence tools might assist in matching researchers with complementary expertise or identifying potential collaborations based on research interests and previous work. Similarly, advanced natural language processing could facilitate collaboration across language barriers.</p>
      
      <h2>Conclusion</h2>
      <p>Digital tools and platforms have fundamentally changed how scientific research is conducted, enabling collaboration that transcends traditional boundaries of geography, discipline, and institution. These technologies not only make existing collaborative processes more efficient but also create entirely new possibilities for how scientists work together.</p>
      <p>As these tools continue to evolve, they will likely play an increasingly central role in addressing complex scientific challenges that require diverse expertise and perspectives. By embracing digital collaboration while thoughtfully addressing its challenges, the scientific community can harness its full potential to accelerate discovery and innovation.</p>
    `,
    date: "December 15, 2022",
    author: "Prof. James Wilson",
    category: "Collaboration",
    readTime: "11 min read",
    image: "/placeholder.svg?key=vnms6",
    slug: "collaborative-research-digital-age",
    tags: ["Collaboration", "Digital Tools", "Open Science", "Research"],
  },
  {
    id: 6,
    title: "Quality Control in Scientific Research",
    excerpt: "Best practices for maintaining rigorous quality standards throughout the research process.",
    content: `
      <p>Quality control is a fundamental aspect of scientific research, ensuring the reliability, reproducibility, and validity of findings. As research becomes increasingly complex and collaborative, implementing robust quality control measures is more important than ever.</p>
      
      <h2>Experimental Design and Planning</h2>
      <p>Quality control begins at the planning stage of research. Well-designed experiments include appropriate controls, adequate sample sizes, and methods to minimize bias. Power analyses can help determine the sample size needed to detect meaningful effects, while randomization and blinding reduce the influence of researcher bias.</p>
      <p>Developing detailed protocols before beginning experiments ensures consistency in methodology and provides a reference for troubleshooting if issues arise. These protocols should be documented thoroughly and, when possible, pre-registered to enhance transparency and reduce the risk of p-hacking or HARKing (Hypothesizing After Results are Known).</p>
      
      <h2>Data Collection and Management</h2>
      <p>During data collection, implementing standardized procedures and regular calibration of instruments helps maintain consistency and accuracy. Electronic data capture systems can reduce transcription errors and provide audit trails that document any changes to the data.</p>
      <p>Proper data management practices include organizing files logically, using clear naming conventions, and maintaining secure backups. Version control systems track changes to data and analysis code, creating a transparent record of the research process and facilitating collaboration.</p>
      
      <h2>Laboratory Quality Management</h2>
      <p>In laboratory settings, quality management systems provide frameworks for ensuring consistent, high-quality research. These systems typically include standard operating procedures (SOPs), regular equipment maintenance and calibration, and staff training programs.</p>
      <p>Many laboratories follow established standards such as Good Laboratory Practice (GLP) or ISO 17025, which provide guidelines for quality management. Regular internal audits can help identify areas for improvement and ensure compliance with these standards.</p>
      
      <h2>Statistical Analysis and Interpretation</h2>
      <p>Quality control in data analysis involves selecting appropriate statistical methods, checking assumptions, and conducting sensitivity analyses to assess the robustness of findings. Consulting with statisticians during the planning phase can help ensure that the experimental design will yield analyzable data and that the most appropriate statistical approaches are used.</p>
      <p>Transparent reporting of statistical methods, including any data transformations, outlier handling, and multiple testing corrections, is essential for reproducibility. Sharing analysis code and raw data when possible further enhances transparency and allows others to verify results.</p>
      
      <h2>Peer Review and Feedback</h2>
      <p>Internal peer review within research groups provides valuable feedback before submitting work for publication. Lab meetings, journal clubs, and informal discussions can help identify potential issues and improve the quality of research.</p>
      <p>External peer review, whether through traditional journal processes or platforms like preprint servers, offers additional perspectives and helps maintain scientific standards. Responding constructively to reviewer feedback, even when critical, can significantly enhance the quality and impact of research.</p>
      
      <h2>Reproducibility and Replication</h2>
      <p>The reproducibility crisis in various scientific fields has highlighted the importance of quality control measures. Efforts to enhance reproducibility include detailed reporting of methods, sharing of data and code, and conducting replication studies.</p>
      <p>Initiatives like the FAIR principles (Findable, Accessible, Interoperable, and Reusable) provide guidelines for making research data more accessible and usable by others. Similarly, reporting guidelines such as CONSORT for clinical trials and ARRIVE for animal studies promote comprehensive and transparent documentation of research methods and findings.</p>
      
      <h2>Continuous Improvement</h2>
      <p>Quality control is not a one-time effort but a continuous process of improvement. Regular review of procedures, staying updated on best practices in the field, and learning from mistakes all contribute to enhancing research quality over time.</p>
      <p>Creating a culture that values quality and integrity is crucial. This includes providing adequate training for researchers at all levels, recognizing and rewarding thorough work rather than just novel findings, and fostering an environment where questions and concerns can be raised without fear of negative consequences.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing robust quality control measures throughout the research process is essential for producing reliable, valid, and impactful scientific work. While these measures require time and resources, they ultimately save effort by reducing errors and enhancing the credibility and usefulness of research findings.</p>
      <p>As scientific research continues to evolve, quality control practices must adapt to new methodologies, technologies, and collaborative approaches. By maintaining a commitment to quality at every stage of the research process, scientists can enhance the integrity of their work and contribute to the advancement of knowledge in their fields.</p>
    `,
    date: "November 5, 2022",
    author: "Dr. Carlos Mendez",
    category: "Best Practices",
    readTime: "10 min read",
    image: "/laboratory-quality-control.png",
    slug: "quality-control-scientific-research",
    tags: ["Quality Control", "Best Practices", "Research Methods", "Reproducibility"],
  },
]

export default function BlogPostPage() {
  const { t } = useLanguage()
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the blog post with the matching slug
    const slug = params.slug as string
    const foundPost = blogPostsData.find((p) => p.slug === slug)

    if (foundPost) {
      setPost(foundPost)
    } else {
      // Redirect to blog listing if post not found
      router.push("/blog")
    }

    setLoading(false)
  }, [params.slug, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terpenos-green"></div>
      </div>
    )
  }

  if (!post) {
    return null // This shouldn't render as we redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Featured Image */}
      <section className="w-full relative">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 -mt-32 pb-8">
          <div className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-terpenos-light-green text-terpenos-forest-green"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Share and Navigation */}
            <div className="mt-12 pt-6 border-t border-terpenos-light-green">
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" onClick={() => router.push("/blog")} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Link copied to clipboard!")
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPostsData
                  .filter(
                    (relatedPost) =>
                      relatedPost.id !== post.id &&
                      (relatedPost.category === post.category ||
                        relatedPost.tags.some((tag: string) => post.tags.includes(tag))),
                  )
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Card key={relatedPost.id} className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                      </CardHeader>
                      <CardFooter className="p-4 pt-0">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
