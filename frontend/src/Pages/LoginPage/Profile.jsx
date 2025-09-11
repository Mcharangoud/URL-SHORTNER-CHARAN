// src/Pages/LoginPage/Profile.jsx

import React, { useEffect, useState } from "react";
import Service from "../../utils/http";   // ✅ fixed path
import { Center, Text } from "@mantine/core";
import { Card } from '@mantine/core';
import { Stack,Title } from '@mantine/core';
import { Avatar } from '@mantine/core';



const obj = new Service();

export default function Profile() {
  const [user, setUser] = useState({});

  const getProfileData = async () => {
    try {
      let data = await obj.get("user/me");  // API call
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    
    <div>
      <Center h="100vh">
        <Card shadow="xl" radius="lg" withBorder padding="xl" style={{ width: 400 }}>
          <Stack spacing="md" align="center">
            {/* Avatar */}
            <Avatar src="/image.png" alt="My profile" size={150} radius={75} />

            {/* Line by line info */}
            <Title order={3} color="blue">
              {user?.name}
            </Title>

            <Text c="blue.8" fz="md">
              ACCOUNT ID: {user?._id}
            </Text>

            <Text c="lime" fz="md" fw={500}>
              EMAIL: {user?.email}
            </Text>
          </Stack>
        </Card>
      </Center>
      
       
      
      
    </div>
    
  );
}
