import React from "react";

import {
  Column,
  Row,
  Text,
  Input,
  Img,
  Button,
  Stack,
  Line,
  SelectBox,
  List,
} from "components";
import { get } from "service/api";
import { CloseSVG } from "../../assets/images/index.js";

const EmployeelistingpagePage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    get(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-end lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Text className="cursor-pointer font-segoeui hover:font-semibold font-semibold lg:text-[22px] xl:text-[25px] text-[29px] 3xl:text-[34px] text-teal_900 w-[auto]">
              Sentry
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal font-sourcesanspro not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              wrapClassName="3xl:ml-[432px] flex lg:ml-[280px] ml-[360px] w-[34%] xl:ml-[320px]"
              name="Group187"
              placeholder="Search.."
              prefix={
                <Img
                  src="images/img_search.png"
                  className="cursor-pointer w-[20.01px] ml-[9px] mr-[10px] lg:w-[15px] lg:mx-[7px] xl:w-[17px] xl:mx-[8px] 2xl:w-[20px] 3xl:w-[24px] 3xl:ml-[10px] 3xl:mr-[12px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#73828c"
                    className="cursor-pointer w-[20.01px] ml-[10px] mr-[22px] lg:w-[15px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 3xl:w-[24px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Img
              src="images/img_question.png"
              className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[244px] xl:ml-[279px] ml-[314px] 3xl:ml-[377px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
              alt="question"
            />
            <Img
              src="images/img_notification.png"
              className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] w-[1%]"
              alt="notification"
            />
            <Button className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] lg:mr-[10px] xl:mr-[12px] mr-[14px] 3xl:mr-[16px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
              <Img
                src="images/img_group100.png"
                className="flex items-center justify-center"
                alt="Group100"
              />
            </Button>
          </Row>
        </header>
        <Column className="items-end lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:px-[318px] xl:px-[364px] px-[410px] 3xl:px-[492px] w-[100%]">
          <Row className="justify-end w-[91%]">
            <Text className="font-medium mb-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
              Home
            </Text>
            <Text className="font-medium mb-[3px] lg:ml-[57px] xl:ml-[65px] ml-[74px] 3xl:ml-[88px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-teal_900 w-[auto]">
              Employee List
            </Text>
            <Text className="font-medium mb-[3px] lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
              Team
            </Text>
            <Text className="font-medium lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] my-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
              Timesheets
            </Text>
            <Text className="font-medium lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_401 w-[auto]">
              Favourites
            </Text>
          </Row>
        </Column>
        <Stack className="h-[2px] 3xl:h-[3px] 2xl:h-[3px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[75%]">
          <Line className="absolute bg-gray_301 h-[1px] top-[0] w-[100%]" />
          <Line className="absolute bg-teal_900 h-[2px] left-[36%] w-[12%]" />
        </Stack>
        <Stack className="font-segoeui 3xl:h-[1060px] lg:h-[686px] xl:h-[785px] h-[882px] 2xl:h-[883px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[90%]">
          <Row className="absolute bg-white_A700 bottom-[0] items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius16 shadow-bs w-[100%]">
            <Text className="font-segoeui font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              Employee List
            </Text>
            <SelectBox
              className="bg-transparent font-normal font-sourcesanspro lg:mb-[616px] xl:mb-[705px] mb-[793px] 3xl:mb-[952px] lg:ml-[626px] xl:ml-[717px] ml-[806px] 3xl:ml-[967px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-teal_900 w-[12%]"
              placeholderClassName="bg-transparent text-teal_900"
              name="Group216"
              placeholder="Filter"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.png"
                  className="w-[8.78px] h-[5.21px] mr-[17px] lg:w-[6px] lg:h-[5px] lg:mr-[13px] xl:w-[7px] xl:h-[5px] xl:mr-[15px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[20px]"
                  alt="arrow_down"
                />
              }
              shape="oundedBorder4"
              variant="utlineGray400"
            ></SelectBox>
            <Button
              className="3xl:ml-[28px] flex items-center justify-center lg:ml-[18px] ml-[24px] text-center w-[13%] xl:ml-[21px]"
              leftIcon={
                <Img
                  src="images/img_plus.png"
                  className="w-[10.67px] h-[10.67px] mr-[12px] text-center lg:w-[8px] lg:h-[9px] lg:mr-[9px] xl:w-[9px] xl:h-[10px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[14px]"
                  alt="plus"
                />
              }
              shape="RoundedBorder4"
              size="sm"
              variant="FillBluegray900"
            >
              <div className="bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                Add Team Member
              </div>
            </Button>
          </Row>
          <Column className="absolute bottom-[0] items-center w-[100%]">
            <Row className="bg-gray_100 border border-gray_300 border-solid items-center justify-evenly lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Employee Name
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Experience level
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Education
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Expected salary
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Capablity 4
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Capablity 5
              </Text>
              <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              {apiData?.map((apiDataResponseEle) => {
                return (
                  <Row className="bg-white_A700 border border-gray_302 border-solid items-center justify-evenly my-[0] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      {apiDataResponseEle?.title}
                    </Text>
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      {apiDataResponseEle?.logger}
                    </Text>
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      {apiDataResponseEle?.status}
                    </Text>
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      {apiDataResponseEle?.level}
                    </Text>
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      -
                    </Text>
                    <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                      -
                    </Text>
                    <Img
                      src="images/img_vector.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_delete.png"
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[1%]"
                      alt="delete"
                    />
                  </Row>
                );
              })}
            </List>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default EmployeelistingpagePage;
