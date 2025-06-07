import Card from "../ui/Card"

type Notifs = {
    header: string;
    body: string;
}

const NotifList: Notifs[] = [
    {
        header: "Live Now",
        body: "Luna is live! Watch me eat"
    },
    {
        header: "Derek Reposted",
        body: "Gutoma oi"
    },
    {
        header: "Kropek Request",
        body: "Hatagi mi Kropek"
    }
]

export default function AllNotifs(){
    return (
        <div>
            {NotifList.map(( notif: Notifs, index: number) => {
                return(
                    <Card key={index} variant={"notif"} size={"notif"} className="p-4">
                        <Card.Header>
                            {notif.header}
                        </Card.Header>
                        <Card.Content>
                            {notif.body}
                        </Card.Content>
                    </Card>
                )
            })}
        </div>
    )
}