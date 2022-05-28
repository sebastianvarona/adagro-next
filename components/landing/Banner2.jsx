import React from "react";

const styles = {
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174')",
  },
};

export default function Banner2() {
  return (
    <section
      className={`h-[75vh] mx-12 rounded-3xl max-w-7xl mx-auto overflow-hidden bg-cover bg-top flex items-stretch relative`}
      style={styles.hero}
    >
      <div
        className={`flex-1 bg-black/20 p-20 flex justify-center items-center`}
      >
        <h1 className={`text-5xl text-white font-bold text-center`}>
          Asociación De Agricultores <br />{" "}
          <span className={`text-7xl font-extrabold`}>Colombianos</span>
        </h1>
      </div>
    </section>
  );
}
