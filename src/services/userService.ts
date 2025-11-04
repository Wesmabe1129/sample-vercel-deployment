import { prisma } from "../lib/prisma";


/**
 * @return user accounts
 */
export const getAllAccounts = async () => {
    return prisma.account.findMany();
}

/**
 * @id User Id
 * @return user Account find by ID
 */
export const getAccount = async (id: number) => {
    return prisma.account.findUnique({
        where: { id }
    })
}

/**
 * @data Account Information
 * @username Account Username
 * @password Account Password
 * @fullname Account Holders Name
 * @return Account Creation
 */
export const createAccount = async (data: { username: string, password: string, fullname: string }) => {
    return prisma.account.create({ data })
}

/**
 * @id Account Id
 * @return Delete Account
 */
export const deleteAccount = async (id: number) => {
    return prisma.account.delete({
        where: { id }
    })
}