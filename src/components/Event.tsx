import React from "react";
import {IconInfoCircle} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Card, Text, Grid, Stack, Title , Popover, Center} from "@mantine/core";

interface EventProps {
  eventName: string;
  eventDate: Date;
  eventDes: string;
}

const Event: React.FC<EventProps> = ({ eventName, eventDate, eventDes }) => {
  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    day: "2-digit",
  });

  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const [opened, { close, open }] = useDisclosure(false);

  const month = months[new Date(eventDate).getMonth()];

  return (
    <Center>
      <Card w={"95%"} radius="md"  bg={"missionSafeBlue.9"} style={{boxShadow:  "0 0 4px 2px rgba(255,255,255,0.4)", marginTop: "2.1px"}}>
      <Grid align="center">
        <Grid.Col span={2}>
          <Stack gap={0} align="center" justify="center">
            <Title order={2} c="white" >{formattedDate}</Title>
            <Title order={5} c="white">{month}</Title>
          </Stack>
        </Grid.Col>
        <Grid.Col span={9}>
          <Title c="white" order={4} w={"100%"} textWrap="wrap" style={{wordBreak: "break-all", msWordBreak:"break-all", whiteSpace: "pre-wrap"}}>{eventName}</Title>
        </Grid.Col>
        <Grid.Col span={1}>
          <Popover opened={opened} position="left">
            <Popover.Target>
              <IconInfoCircle onMouseOver={open} onMouseOut={close} color="white"/>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">
                {eventDes}
              </Text>
            </Popover.Dropdown>
          </Popover>
        </Grid.Col>
      </Grid>
    </Card>
    </Center>
  );
};

export default Event;
