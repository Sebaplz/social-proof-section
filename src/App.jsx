import "./App.css";
import CommentsCard from "./components/CommentsCard";
import RatingCard from "./components/RatingCard";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-[url('/images/bg-pattern-bottom-mobile.svg')] lg:bg-[url('/images/bg-pattern-bottom-desktop.svg')] bg-no-repeat bg-cover px-5 py-20 lg:px-20 xl:px-32 2xl:px-56">
      <div className="lg:flex xl:justify-between">
        <div className="text-center lg:w-2/5">
          <h1 className="text-5xl text-[#502050] font-bold lg:text-left xl:text-6xl 2xl:text-7xl">
            10,000+ of our users love our products.
          </h1>
          <p className="my-5 text-lg text-[#937B92] font-medium lg:text-left xl:text-xl 2xl:text-2xl">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="w-full lg:w-3/5 lg:flex lg:flex-col xl:w-1/2">
          <div className="lg:justify-start lg:flex">
            <RatingCard texto="Reviews" />
          </div>
          <div className="lg:flex lg:justify-center">
            <RatingCard texto="Report Guru" />
          </div>
          <div className="lg:flex lg:justify-end">
            <RatingCard texto="BestTech" />
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:pr-5 lg:w-1/3 xl:w-2/5">
          <CommentsCard
            img="colton"
            nombre="Colton Smith"
            comentario="We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
          />
        </div>
        <div className="lg:w-1/3 lg:mt-5 xl:w-2/5">
          <CommentsCard
            img="irene"
            nombre="Irene Roberts"
            comentario="Customer service is always excellent and very quick turn around. Completely
        delighted with the simplicity of the purchase and the speed of delivery."
          />
        </div>
        <div className="lg:pl-5 lg:w-1/3 lg:mt-10 xl:w-2/5">
          <CommentsCard
            img="anne"
            nombre="Anne Wallace"
            comentario="Put an order with this company and can only praise them for the very high
        standard. Will definitely use them again and recommend them to everyone!"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
