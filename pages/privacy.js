import DashboardLayout from "../components/dashboardLayout";

function Privacy() {
  return (
    <div className="wrapper">
      <div className="header">
        <h3>Privacy Policy</h3>
        <p>Last edited: January 2020</p>
      </div>
      <div className="section">
        <p>
          This page informs you of our policies regarding the collection, use
          and disclosure of Personal Information we receive from users of the
          Site. We use your Personal Information only for providing and
          improving the app. By using the Site, you agree to the collection and
          use of information in accordance with this policy.
        </p>
      </div>
      <div className="section">
        <h4>Information Collection and Use</h4>
        While using our Getch application, we may ask you to provide us with
        certain personally identifiable information by authenticating with
        Facebook. This information can be used to contact or identify you.
        Personally identifiable information may include, but is not limited to
        your name, email, ad accounts, ads.
      </div>
      <div className="section">
        <h4>Log Data</h4>
        Like many site operators, we collect information that your browser sends
        whenever you visit our Site ("Log Data"). This Log Data may include
        information such as your computer's Internet Protocol ("IP") address,
        browser type, browser version, the pages of our Site that you visit, the
        time and date of your visit, the time spent on those pages and other
        statistics. In addition, we may use third party services such as Google
        Analytics that collect, monitor and analyze this Log Data.
      </div>
      <div className="section">
        <h4>Communications</h4>
        We may use your Personal Information to contact you with newsletters,
        marketing or promotional materials and other information that will
        enable you fully utilize the Getch application. All our communications
        channels allow users to unsubscribe from receiving such information.
      </div>
      <div className="section">
        <h4>Cookies</h4>
        Cookies are files with small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a web
        site and stored on your computer's hard drive. Like many sites, we use
        "cookies" to collect information. You can instruct your browser to
        refuse all cookies or to indicate when a cookie is being sent. However,
        if you do not accept cookies, you may not be able to use some portions
        of our application. We use cookies to provide a seamless experience such
        as not having you to log in everytime you visit the application.
      </div>
      <div className="section">
        <h4>Security</h4>
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security. We use SSL encription as system
        communication protocol.
      </div>
      <div className="section">
        <h4>Changes To This Privacy Policy</h4>
        This Privacy Policy is effective as of (add date) and will remain in
        effect except with respect to any changes in its provisions in the
        future, which will be in effect immediately after being posted on this
        page. We reserve the right to update or change our Privacy Policy at any
        time and you should check this Privacy Policy periodically. Your
        continued use of the Service after we post any modifications to the
        Privacy Policy on this page will constitute your acknowledgment of the
        modifications and your consent to abide and be bound by the modified
        Privacy Policy. If we make any material changes to this Privacy Policy,
        we will notify you either through the email address you have provided
        us, or by placing a prominent notice on our website.
      </div>
      <div className="section">
        <h4>Contact us</h4>
        If you have any questions about this Privacy Policy, please contact us.
        legal@getchapp.com
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 150px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

Privacy.Layout = DashboardLayout;

export default Privacy;
