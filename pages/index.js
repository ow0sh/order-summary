import Image from "next/image";

export default function App() {
  return (
    <main
      className={"w-[450px] h-[700px] bg-white rounded-2xl overflow-hidden"}
    >
      <header className={"w-full h-[220px]"}>
        <Image
          src={"illustration-hero.svg"}
          alt={""}
          width={450}
          height={220}
        />
      </header>
      <article className={"font-default mt-[50px] text-center"}>
        <h1 className={"text-3xl text-dark-blue font-black"}>Order Summary</h1>
        <p className={"my-[20px] px-[60px] text-desaturated-blue font-medium"}>
          You can now listen to millions of songs, audiobooks and podcasts on
          any device anywhere you like!
        </p>
      </article>
      <div
        className={
          "flex justify-between mx-[60px] bg-very-pale-blue h-[100px] rounded-xl"
        }
      >
        <div className={"flex"}>
          <div
            className={
              "flex flex-col justify-center content-center flex-wrap h-full w-[100px]"
            }
          >
            <Image src={"icon-music.svg"} alt={""} width={50} height={50} />
          </div>
          <div className={"my-auto"}>
            <h1 className={"font-default text-dark-blue font-black"}>
              Annual plan
            </h1>
            <p className={"font-default text-desaturated-blue"}>$59.99/year</p>
          </div>
        </div>
        <div>
          <a
            className={
              "flex flex-col w-full h-full justify-center font-default text-bright-blue " +
              "underline font-bold mr-[20px] text-xs hover:no-underline opacity-100 hover:opacity-50 transition-opacity"
            }
            href={"#"}
          >
            Change
          </a>
        </div>
      </div>
      <div className={"flex flex-col mt-[20px] mx-[60px]"}>
        <button
          className={
            "font-default font-bold bg-bright-blue h-[50px] text-white rounded-xl opacity-100 transition-opacity hover:opacity-50 ease-in-out duration-300"
          }
        >
          Proceed to Payment
        </button>
        <button
          className={
            "font-default font-bold mt-[20px] h-[50px] text-desaturated-blue hover:text-dark-blue transition-all duration-500 delay-150"
          }
        >
          Cancel Order
        </button>
      </div>
    </main>
  );
}
