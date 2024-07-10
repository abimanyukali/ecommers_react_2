import './descriptionBox.css';
function DescriptionBox() {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box ">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where business and individual showcase their products
          interact with customers
        </p>
      </div>
    </div>
  );
}
export default DescriptionBox;
