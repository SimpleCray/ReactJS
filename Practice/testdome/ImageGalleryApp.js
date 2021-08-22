// An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:

// <div>
//   <div class="image">
//     <img src="https://bit.ly/3lmYVna">
//     <button class="remove">X</button>
//   </div>
//   <div class="image">
//     <img src="https://bit.ly/3flyaMj">
//     <button class="remove">X</button>
//   </div>
// </div>
// Implement the ImageGallery component that accepts a links prop and renders the gallery described above so that the first item in the links prop is the src attribute of the first image in the gallery. It should also implement the following logic: When the button is clicked, the image that is in the same div as the button should be removed from the gallery.

// For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

// <div>
//   <div class="image">
//     <img src="https://bit.ly/3flyaMj">
//     <button class="remove">X</button>
//   </div>
// </div>

// Requirement:
//     Example case: Wrong answer 
//     ImageGallery will render the correct list: Wrong answer 
//     Remove a single image: Wrong answer 
//     Remove multiple images: Wrong answer 

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class ImageGallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = { links: props.links };
    }
    remove = url => {
      console.log(url)
      this.setState(state => ({
        links: state.links.filter(l => l !== url)
      }));
    };
    render() {
      const { links } = this.state;
      return (
        <div>
          {links.map((item, index) => {
            return (
              <div key={item} className="image">
                <img key={index} src={item} alt="" />{" "}
                <button className="remove" onClick={() => this.remove(item)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
  ReactDOM.render(<ImageGallery links={ links } />,
                  rootElement);
  document.querySelectorAll('.remove')[0].click();
  console.log(rootElement.innerHTML);