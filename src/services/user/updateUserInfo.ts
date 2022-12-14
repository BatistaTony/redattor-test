import { http } from '@adapters/index';
import { UpdateUserInfoProps, UpdateUserInfoResponse } from './types';

export const updateUserInfo = async (
  data: UpdateUserInfoProps,
  userID: string,
): Promise<UpdateUserInfoResponse> => {
  const response: UpdateUserInfoResponse = {
    status: 0,
    isLoading: true,
  };

  try {
    const res = await http.patch(`users/${userID}`, data as any);

    response.status = res.status as number;
    response.isLoading = false;
  } catch (error: unknown) {
    const errorResponse = (error as unknown as any).response;

    response.status = errorResponse.status as number;
    response.isLoading = false;
  }

  return response;
};
