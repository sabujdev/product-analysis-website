import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="question">
      <div className="qus">
        <h1>What is Context API?</h1>
        <p>
          React we usually send data from one component to another. In that case
          the data of one component has to be sent to another child component as
          props. Often the situation is that the child component is much lower
          than our main component where your data is. That means that data
          component has another child component, again that child component has
          another child component. There may be many children doing this. It can
          be said to be like solving prop-drilling from all levels of your
          application.. We usually use Redux in such situations or the situation
          may be more complicated than that. In that case we have a global
          status that any child can access later if they want, without having to
          pass all the components as props and take data.
        </p>
      </div>
      <div className="qus">
        <h1>what is semantic tags?</h1>
        <p>
          HTML5 semantic elements support all modern browsers. Generally
          semantic tags means about to an element call it with it's proper name.
          which induces with it's prime criteria. Able to define separate parts
          with it's separate name which previous version of HTML use with
          classes. Possible combinations are included here. Tags define HTML
          elements for markups in terms of browser of modern style
          approach.Semantic HTML elements are those that clearly describe their
          meaning in a human- and machine-readable way. Elements such as
          'header' , 'footer 'and 'article' are all considered semantic because
          they accurately describe the purpose of the element and the type of
          content that is inside them.
        </p>
      </div>

      <div className="qus">
        <h1>What is the different of inline-blog or inline-block-element</h1>
        <p>
          Inline elements allow other inline elements to sit behind. Block
          elements have top and bottom margin.
          <br />
          Inline elements don't start in a new line. Block elements always start
          in a line.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
