import React from "react";

const devClasses = "border-2 border-black bg-indigo-400";

const PicWithInfo = ({ isRowInvert }) => {
  return (
    <div
      className={`flex flex-col-reverse my-10 w-10/12 mx-auto justify-center items-center lg:justify-evenly h-auto lg:space-x-10 ${
        isRowInvert ? " lg:flex-row-reverse" : " lg:flex-row"
      } bg-transparent space-y-10 lg:space-y-0`}
    >
      <div
        className={`h-80 overflow-scroll px-6 lg:w-5/12 shadow-sm bg-gray-50  rounded-3xl hover:shadow-2xl transition`}
      >
        <h1 className="mx-4 my-6 text-4xl font-semibold tracking-wide">
          Lorem, ipsum dolor.
        </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          maxime quo quia modi animi quae repellendus non incidunt quis iste
          eligendi, excepturi ab molestiae, molestias dolores architecto. Harum,
          repellat excepturi! Ea, eius, molestias consequatur assumenda dicta
          perspiciatis corrupti saepe repellendus amet doloremque odit dolorem
          illo! Repellendus neque veniam ducimus labore culpa quaerat deleniti
          voluptas doloribus nemo optio cumque voluptatum hic iste quis at
          eveniet perspiciatis similique repudiandae reprehenderit, asperiores
          ut ullam! Hic quae voluptate eos rerum quisquam fugiat nostrum
          consequuntur! Rerum, earum? Incidunt laborum illo, similique aliquam,
          quisquam maxime accusamus, qui eum quas voluptatum rerum ut nihil
          obcaecati expedita repellendus. Expedita, velit distinctio nisi quo
          molestias laudantium autem porro assumenda aliquid molestiae aliquam
          praesentium hic nemo id in minus accusantium! Cum eos, sapiente magnam
          quibusdam harum recusandae, cupiditate numquam similique, provident
          minus vitae consequuntur placeat facere officia incidunt ratione
          accusamus? Error quibusdam, tenetur odio rerum consectetur ea cum
          natus aspernatur optio sapiente ipsam eos adipisci molestias rem
          eveniet dolorum quae? Qui corrupti cum minus id deserunt, veniam vero
          impedit nesciunt officiis, expedita non! Odio eos dolorum atque?
          Commodi a magni quo consequatur hic at, culpa modi numquam eius, esse,
          eaque fugit cum tempore illo mollitia placeat quaerat harum? Unde,
          amet.
        </p>
      </div>
      <div
        className={`${devClasses} h-80 object-cover w-11/12  lg:w-5/12 rounded-3xl shadow-sm hover:shadow-2xl transition`}
      ></div>
    </div>
  );
};

export default PicWithInfo;
