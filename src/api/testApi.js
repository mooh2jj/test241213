import axios from "axios";

// .env 파일에 있는 AWS_EC2_IP_ADDRESS 값을 가져오기
const AWS_EC2_IP_ADDRESS = process.env.AWS_EC2_IP_ADDRESS;

// 테스트 API 호출
export const getTest = async () => {
  const response = await axios.get(`${AWS_EC2_IP_ADDRESS}:8080/api/test/list`);
  return response.data;
};
