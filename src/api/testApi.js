import axios from "axios";

// .env 파일에 있는 AWS_EC2_IP_URL 값을 가져오기
const awsEc2IpUrl = process.env.AWS_EC2_IP_URL;

// 테스트 API 호출
export const getTest = async () => {
  const response = await axios.get(`${awsEc2IpUrl}/api/test/list`);
  return response.data;
};
