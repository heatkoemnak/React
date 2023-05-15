import React from "react";
import "./Related.css"
import related1 from "../screen/asset/related_to_recycle1.jpg";
import related2 from "../screen/asset/related_to_recycle2.jpg";
import related3 from "../screen/asset/related_to_recycle3.jpg";
import related4 from "../screen/asset/related_to_recycle4.jpg";
import related5 from "../screen/asset/related_to_recycle5.jpg";
import related6 from "../screen/asset/related_to_recycle6.jpg";
import related7 from "../screen/asset/related_to_recycle7.jpg";
import related8 from "../screen/asset/related_to_recycle8.jpg";
import related9 from "../screen/asset/related_to_recycle9.jpg";
import related10 from "../screen/asset/related_to_recycle10.jpg";
import related11 from "../screen/asset/related-to-recycle11.jpg";
function Related() {
  return (
    <div class="Related">
      <h2>Related Collection</h2>
      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related11} alt="" />
          </div>
          <div class="related-text">
            <h3>Recycle</h3>
            <div class="photos-related">
              <p>693 photos</p>
              <p>Created by Mel Hammer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related2} alt="" />
          </div>
          <div class="related-text">
            <h3>Texture/Plastic</h3>
            <div class="photos-related">
              <p>1.1k photos</p>
              <p>Created by Mixer X</p>
            </div>
          </div>
        </div>
      </div>

      <div class="related-container">
        <div class="wrape-content">
          <div class="image">
            <img src={related5} alt="" />
          </div>
          <div class="related-text">
            <h3>Going Green, Save the Earth, Climate Change</h3>
            <div class="photos-related">
              <p>2.3k photos</p>
              <p>Created by Gen Alert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Related;
