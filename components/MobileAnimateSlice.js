import React from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { fadeIn } from "react-animations";
import styles from "../styles/Home.module.css";
const MobileAnimateSlice = () => {
  return (
    <>
      <Controller>
        <Scene
          duration={400}
          pin={true}
          //   indicators={true}
          triggerHook="onLeave"
        >
          {(progress) => (
            <div className="container-fluid">
              <Timeline totalProgress={progress} paused>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ color: "white" }}>Hello World</h1>
                  </div>
                </Tween>
              </Timeline>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* <Timeline totalProgress={progress} paused>
                  
                </Timeline> */}

                <Timeline totalProgress={progress} paused>
                  <Tween
                    from={{ opacity: 0.5, y: -10 }}
                    to={{ opacity: 1, y: -2 }}
                  >
                    {/* <Tween from={{ y: -100 }} to={{ opacity: 100 }} > */}
                    {/* <Tween from={{ x: -1000 }} to={{ x: 250 }} /> */}
                    {/* <Tween from={{ opacity: 1 }} to={{ opacity: -1 }} /> */}

                    <div
                      className={`w-100 hero flex-column d-flex justify-content-center align-items-center ${styles.hero}`}
                    >
                      <Timeline totalProgress={progress} paused>
                        <img
                          src="Group 33521.svg"
                          alt="Image"
                          className={styles.image4}
                        />
                        <img
                          src="Group 33522.svg"
                          alt="Image"
                          className={styles.image5}
                        />
                        <img
                          src="Group 33523.svg"
                          alt="Image"
                          className={styles.image6}
                        />
                        <img
                          src="Group 33524.svg"
                          alt="Image"
                          className={styles.image7}
                        />
                        <img
                          src="Group 33525.svg"
                          alt="Image"
                          className={styles.image8}
                        />
                        <Tween
                          from={{ scale: 3, opacity: 1 }}
                          to={{ scale: 1, opacity: 1 }}
                        >
                          {/* <div className="logo"></div> */}

                          <img
                            src="Group 33517.svg"
                            alt="Image"
                            className={styles.image}
                          />
                          <img
                            src="Group 33518.svg"
                            alt="Image"
                            className={styles.image1}
                          />
                          <img
                            src="Group 33519.svg"
                            alt="Image"
                            className={styles.image2}
                          />
                          <img
                            src="Group 33520.svg"
                            alt="Image"
                            className={styles.image3}
                          />
                        </Tween>
                      </Timeline>
                    </div>
                  </Tween>
                </Timeline>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </>
  );
};

export default MobileAnimateSlice;
