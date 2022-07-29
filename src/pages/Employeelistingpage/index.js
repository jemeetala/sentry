import React from "react";

import {
  Row,
  Column,
  Img,
  Button,
  Input,
  Stack,
  Text,
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
      <Row className="bg-gray_100 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="items-center w-[6%]">
          <Column className="">
            <Column className="bg-teal_900 items-center justify-center lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] w-[100%]">
              <Column className="items-center mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[50%]">
                <Img
                  src="images/img_vector.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[95%]"
                  alt="Vector"
                />
                <Img
                  src="images/img_notification.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[80%]"
                  alt="notification"
                />
                <Img
                  src="images/img_folder.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]"
                  alt="folder"
                />
                <Img
                  src="images/img_vector_bluegray_100.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="Vector One"
                />
                <Img
                  src="images/img_favorite.png"
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]"
                  alt="favorite"
                />
                <Img
                  src="images/img_close.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="close"
                />
                <Img
                  src="images/img_menu.png"
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  alt="menu"
                />
                <Img
                  src="images/img_grid.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[381px] xl:mt-[435px] mt-[490px] 3xl:mt-[588px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="grid"
                />
                <Img
                  src="images/img_question.png"
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  alt="question"
                />
              </Column>
              <Button className="flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                <Img
                  src="images/img_group100.png"
                  className="flex items-center justify-center"
                  alt="Group100"
                />
              </Button>
            </Column>
          </Column>
        </aside>
        <Column className="items-center w-[94%]">
          <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-between lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
            <Img
              src="images/img_group.png"
              className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] w-[15%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
              wrapClassName="3xl:mr-[16px] flex lg:mr-[10px] mr-[14px] w-[26%] xl:mr-[12px]"
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
          </Row>
          <Stack className="font-segoeui 3xl:h-[1060px] lg:h-[686px] xl:h-[785px] h-[882px] 2xl:h-[883px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[96%]">
            <Row className="absolute bg-white_A700 bottom-[0] items-center lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[100%]">
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
              <Row className="bg-gray_101 border border-gray_300 border-solid items-center justify-evenly lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Employee Name
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Experience level
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Education
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Expected salary
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Capablity 4
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Capablity 5
                </Text>
                <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_500 w-[auto]">
                  Action
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                {apiData?.map((apiDataResponseEle) => {
                  return (
                    <Row className="bg-white_A700 border border-gray_301 border-solid items-center justify-evenly my-[0] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] w-[100%]">
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        {apiDataResponseEle?.title}
                      </Text>
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        {apiDataResponseEle?.level}
                      </Text>
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        {apiDataResponseEle?.culprit}
                      </Text>
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        {apiDataResponseEle?.status}
                      </Text>
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        -
                      </Text>
                      <Text className="font-normal lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                        -
                      </Text>
                      <Img
                        src="images/img_vector_black_900.png"
                        className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        alt="Vector Two"
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
      </Row>
    </>
  );
};

export default EmployeelistingpagePage;
