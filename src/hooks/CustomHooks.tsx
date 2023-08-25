import { useQuery } from "@tanstack/react-query"
import { viewOneAdmin } from '../api/AdminApi'
import { viewRoom } from "../api/AdminRoomAPI"


export const useTanAdminOne = (id: string) => {
    const { data: admin, error, isLoading } = useQuery({
        queryKey: ['viewAdminOne', { id: id }],
        queryFn: () => viewOneAdmin(id),
        refetchInterval: 1000,
    })
    return { admin, error, isLoading }
}

export const useTanRoom = () => {
    const { data: room} = useQuery({
        queryKey: ['viewRoom'],
        queryFn: viewRoom,
        refetchInterval: 1000,
    })
    return { room }
}