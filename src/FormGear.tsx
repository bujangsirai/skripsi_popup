import {
  createRoot,
  type Component,
  onMount,
  onCleanup,
  createEffect,
} from "solid-js";
// @ts-ignore
import { FormGear } from "form-gear";
// Get Data From Outside :

// Default Empties :
import media from "./default/media.json";
import preset from "./default/preset.json";
import reference from "./default/reference.json";
import remark from "./default/remark.json";
import response from "./default/response.json";

const FGPage: Component = (props: any) => {
  function initForm(
    reference: any,
    template: any,
    preset: any,
    response: any,
    validation: any,
    media: any,
    remark: any,
  ) {
    let config = {
      clientMode: 1, // 1 => CAWI ; 2 => CAPI ;
      //both token and baseUrl are used for data lookup from the api (for selectInput, multiselect Input, and listSelectInput)
      token: ``, //for authentication such as bearer token
      baseUrl: ``,
      lookupKey: `keys`, //optional
      lookupValue: `values`, //optional
      lookupMode: 1, // 1 => ONLINE ; 2 => OFFLINE
      username: "dummy", //
      formMode: props.mode, // 1 => OPEN ; 2 => REVIEW ; 3 => CLOSE ;
      initialMode: 2, // 1=> INITIAL ; 2 => ASSIGN
    };

    const setBearer = () => {
      return {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + config.token,
        },
      };
    };

    let uploadHandler = function (setter: any) {
      // console.log('camera handler', setter);
      // cameraFunction = setter;
      // openCamera();
    };

    let offlineSearch = function (
      id: any,
      version: any,
      dataJson: any,
      setter: any,
    ) {
      let condition = JSON.stringify(dataJson);

      //here we use jquery to retrieve data from the local device
      $.ajax({
        url: `http://localhost:9090/lookup?id=${id}&v=${version}&c=${condition}`, //specify localhost endpoint to fetch
        type: "GET",
        crossDomain: true,
        dataType: "json",
        data: null,
        success: function (d: any) {
          console.log(d.hasil);
          setter(d);
        },
        error: function (
          XMLHttpRequest: any,
          textStatus: any,
          errorThrown: any,
        ) {},
      });
    };

    let GpsHandler = function (setter: any, isPhoto: any) {
      // console.log('camera handler', setter);
      // isPhoto = true,
      // cameraGPSFunction = setter;
      // openCameraGPS(isPhoto);
    };

    //custom function to trigger setResponsMobile to run from outside form-gear, you can custom the function name
    let mobileExit = (fun: any) => {
      // fun()
    };

    let onlineSearch = async (url: any) =>
      await fetch(url, setBearer())
        .catch((error: any) => {
          return {
            success: false,
            data: {},
            message: "500",
          };
        })
        .then((res: any) => {
          if (res.status === 200) {
            let temp = res.json();
            return temp;
          } else {
            return {
              success: false,
              data: {},
              message: res.status,
            };
          }
        })
        .then((res: any) => {
          return res;
        });

    //function to get response, remark, principal and reference
    let setResponseMobile = function (
      res: any,
      med: any,
      rem: any,
      princ: any,
      ref: any,
    ) {
      console.log("----------", new Date(), "----------");

      console.log("response", res);
      console.log("media", med);
      console.log("remark", rem);
      console.log("principal", princ);
      console.log("reference", ref);
    };

    let setSubmitMobile = function (
      res: any,
      med: any,
      rem: any,
      princ: any,
      ref: any,
    ) {
      console.log("----------", new Date(), "----------");

      console.log("response", res);
      console.log("media", med);
      console.log("remark", rem);
      console.log("principal", princ);
      console.log("reference", ref);
      console.log("SUBMIT MOBILI");
    };

    let openMap = function (koordinat: any) {
      // koordinat = koordinat
      // console.log('coordinat ', koordinat)
    };

    let form = FormGear(
      reference,
      template,
      preset,
      response,
      validation,
      media,
      remark,
      config,
      uploadHandler,
      GpsHandler,
      offlineSearch,
      onlineSearch,
      mobileExit,
      setResponseMobile,
      setSubmitMobile,
      openMap,
    );

    return form;
  }

  onMount(() => {
    console.log("FormGear is mounted");
    createRoot(() => {
      let form = initForm(
        reference,
        props.template,
        preset,
        props.response,
        // response,
        props.validation,
        media,
        remark,
      );
      return form;
    });
  });

  onCleanup(() => {
    // Clean up the form
    console.log("FormGear is unmounted");
  });

  createEffect(() => {
    console.log("FormGear is updated");
    console.log("ref", reference);
    console.log("template", props.template);
    console.log("preset", preset);
    console.log("response", props.response);
    console.log("validation", props.validation);
    console.log("media", media);
    console.log("remark", remark);
  });

  const data = Promise.all([
    reference,
    props.template,
    preset,
    props.response,
    props.validation,
    media,
    remark,
  ]);

  data.then(
    ([reference, template, preset, response, validation, media, remark]) =>
      initForm(
        reference,
        template,
        preset,
        response,
        validation,
        media,
        remark,
      ),
  );

  return (
    <div>
      <div id="FormGear-loader" class="h-screen  bg-gray-200 dark:bg-[#181f30]">
        <div class="overflow-hidden">
          <div class="font-montserrat flex h-screen overflow-hidden rounded-lg bg-gray-50 text-sm text-gray-600 shadow-xl dark:bg-gray-900 dark:text-white  dark:shadow-gray-800">
            <div class=" z-0 flex flex-grow flex-col bg-white dark:bg-gray-900">
              <div class="relative  max-h-screen md:flex  ">
                <div class="block">
                  <div class=" fixed inset-0 z-50 col-span-12 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none backdrop-blur-sm focus:outline-none">
                    <svg
                      class="h-20 w-20 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 94.53 98.372"
                    >
                      <circle
                        cx="23.536"
                        cy="16.331"
                        r="8.646"
                        style="fill:#0a77e8"
                      />
                      <circle
                        cx="8.646"
                        cy="36.698"
                        r="8.646"
                        style="fill:#0f9af0"
                      />
                      <circle
                        cx="8.646"
                        cy="61.867"
                        r="8.646"
                        style="fill:#0f9af0"
                      />
                      <circle
                        cx="23.536"
                        cy="82.233"
                        r="8.646"
                        style="fill:#13bdf7"
                      />
                      <circle
                        cx="47.361"
                        cy="89.726"
                        r="8.646"
                        style="fill:#13bdf7"
                      />
                      <circle
                        cx="71.282"
                        cy="82.233"
                        r="8.646"
                        style="fill:#18e0ff"
                      />
                      <circle
                        cx="85.884"
                        cy="61.867"
                        r="8.646"
                        style="fill:#65eaff"
                      />
                      <circle
                        cx="85.884"
                        cy="36.698"
                        r="8.646"
                        style="fill:#b2f5ff"
                      />
                      <circle
                        cx="47.361"
                        cy="8.646"
                        r="8.646"
                        style="fill:#1d4970"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  class="absolute inset-y-0 left-0 z-10  h-full w-72  flex-shrink-0 -translate-x-full
                  transform space-y-4 bg-gray-50 p-5 transition-transform duration-500 ease-in-out dark:border-gray-800 dark:bg-gray-900 md:relative md:translate-x-0"
                >
                  <div class="flex animate-pulse space-x-4">
                    <div class="flex-1 space-y-3 py-1">
                      <div class="w-full  rounded-lg shadow-2xl">
                        <div class="h-32 animate-pulse rounded-tl-lg rounded-tr-lg bg-gray-200"></div>

                        <div class="p-5">
                          <div class="mb-4 h-20 animate-pulse rounded-lg bg-gray-200 px-2"></div>
                          <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                          <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                          <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                          <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                          <div class="mb-4 mt-10 h-20 animate-pulse rounded-lg bg-gray-200 px-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="z-10 flex-grow space-y-4 bg-white p-5 transition duration-500 ease-in-out dark:bg-gray-900
                  "
                >
                  <div class="flex-grow bg-white dark:bg-gray-900 ">
                    <div class=" mx-auto w-full">
                      <div class="flex animate-pulse space-x-4">
                        <div class="flex-1 space-y-3 py-1">
                          <div class="flex min-h-screen items-start justify-start bg-gradient-to-br from-gray-200 to-gray-400">
                            <div class="w-full rounded-lg  bg-white shadow-2xl">
                              <div class="h-32 animate-pulse rounded-tl-lg rounded-tr-lg bg-gray-200"></div>

                              <div class="p-5">
                                <div class="mb-4 h-20 animate-pulse rounded-lg bg-gray-200 px-2"></div>
                                <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                                <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                                <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>

                                <div class="mb-4 mt-10 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                                <div class="mb-4 mt-4 h-6 animate-pulse rounded-lg bg-gray-200"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="FormGear-root"></div>
    </div>
  );
};

export default FGPage;
