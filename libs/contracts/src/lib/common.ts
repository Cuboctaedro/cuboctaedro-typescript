export type IStatus = 'public' | 'private';

export type With_ID = {
    _id: string;
};

export type With_Status = {
    status: IStatus;
};
