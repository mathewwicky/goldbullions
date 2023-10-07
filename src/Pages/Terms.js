import { Container } from "react-bootstrap"
import Footer from "../Components/Footer/Footer"
import Navigationbar from "../Components/Navigation/Navigationbar"

const Terms = () => {
    return (
        <>
            <Container id="contentbox"
                style={{
                    marginTop: "2%",
                    background: "#FFF"
                }}>
                <Navigationbar />
            </Container>
            <Container>
                <p className="worksans mt-5 t-cheading" style={{
                    color: "#014D85",
                    fontSize: "72px",
                    fontWeight: "600",
                    lineHeight: "104%",
                    letterSpacing: "-3.6px"
                }}>Terms and Conditions</p>

                <article className="articlesection aeonik mt-5" style={{
                    width: "60%",
                     color: "#666C89",
                     marginBottom:"15%",
                    fontSize: "18px"
                }}>

                    <h4 className="aeonik terms-heading">1. Data Collection</h4>
                    <p ><b>Minimal Data Collection:</b> We strictly adhere to the principle of collecting only the minimum amount of user data necessary to provide our services effectively. We avoid requesting sensitive or unnecessary information that could compromise user privacy.
                        <br /> <br />
                        <b>Transparent Consent:</b> We believe in transparency and provide clear information to users regarding the data we collect, how it will be used, and with whom it may be shared. We obtain explicit consent from users before collecting any personal information.</p>
                    
                    <h4 className="mt-4 aeonik terms-heading">2. Data Storage And Security</h4>
                    <p><b>Robust Security Measures:</b> To protect user data from unauthorized access, we implement industry-standard security measures, including encryption, firewalls, and access controls. Our data is stored in secure data centers with restricted access. <br /><br />
                        <b>Anonymization and Pseudonymization:</b>Wherever possible, we employ techniques like anonymization and pseudonymization to minimize the risk of identification in case of a data breach.<br /><br />
                        <b>Regular Data Backups:</b> We have automated and regular data backup procedures in place to ensure data integrity and availability in case of any
                    </p>

                    <h4 className="mt-4 aeonik terms-heading">3. User Access and Control</h4>
                    <p><b>Account Management:</b> Users have full control over their accounts and can review, edit, or delete their personal information within the application. We encourage users to utilize strong password requirements and enable multi-factor authentication for enhanced account security.<br /><br />
                        <b>Privacy Settings:</b> Our application offers granular privacy settings, empowering users to control the visibility and sharing of their data. These settings are easily accessible and clearly explained to users.</p>

                    <h4 className="mt-4 aeonik terms-heading">4. Third Party Integrations and Data Sharing</h4>
                    <p><b>Vendor Due Diligence:</b> Before integrating third-party services or sharing user data with external entities, we conduct thorough privacy and security assessments of these vendors to ensure they adhere to similar privacy standards.<br /><br />
                        <b> Data Sharing Agreements:</b> We establish clear agreements with third-party partners that outline the purpose, scope, and safeguards for any data shared. We regularly review and audit these agreements to maintain compliance.
                    </p>

                    <h4 className="mt-4 aeonik terms-heading">5. Employee Training and Awareness</h4>
                    <p><b>Privacy Policies and Training:</b> We have developed a comprehensive privacy policy that outlines our commitment to protecting user data. All employees undergo regular training to understand privacy practices, data handling procedures, and compliance requirements.<br /><br />
                        <b>Data Access Controls:</b> Access to user data is limited to authorized personnel only. We implement user roles and permissions to ensure that employees have access only to the data necessary for their roles.
                    </p>

                    <h4 className="mt-4 aeonik terms-heading">6. Compliance with Privacy Regulations</h4>
                    <p><b>Stay Informed:</b> We continually stay informed about the latest privacy laws and regulations relevant to our application, such as the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA).<br/><br/>
                    <b>Legal Compliance:</b> We implement necessary measures to ensure compliance with applicable privacy regulations, including user consent mechanisms, data breach notification processes, and data subject rights management. </p>

                    <h4 className="mt-4 aeonik terms-heading">7. Incidence Report and Date Breach Managment</h4>
                    <p><b>Incident Response Plan:</b> We have developed a comprehensive incident response plan that outlines the steps to be taken in the event of a data breach or privacy incident. This plan includes communication protocols, mitigation strategies, and reporting procedures.<br/><br/>
                    <b>Data Breach Notifications:</b> In the unfortunate event of a data breach, we have established procedures for promptly notifying affected users, regulatory authorities, and other relevant stakeholders in accordance with legal requirements.
                    </p>
                </article>
            </Container>
            <Footer />
        </>
    )
}
export default Terms;