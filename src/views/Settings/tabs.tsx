import { FC, useState, SyntheticEvent } from 'react';
import { Box, Tab, Tabs, useTheme } from '@mui/material';

import {
  AdminPanelSettingsOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material';
import { IUser } from 'typescript/user.type';
import { useRequestSWR } from '@adapters/http/swr.adpater';
import { DataToShow } from './types';

import { TabsContent } from './TabSections';
import AvatarSection from './AvatarSection';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabData = ['Informações pessoais', 'Segurança'];

const CustomTabs: FC = () => {
  const [value, setValue] = useState(0);
  const { palette } = useTheme();

  const { colors } = palette;

  const { data } = useRequestSWR<IUser>('/users/me');

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100% - 103px)',
        backgroundColor: colors.white,
        borderRadius: '6px 6px 0 0',
        padding: '30px',
        marginTop: '50px',
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ borderBottom: 2, borderColor: colors.Light3 }}
          TabIndicatorProps={{
            style: {
              backgroundColor: colors.purpleDark,
              color: colors.purpleDark,
            },
          }}
        >
          {tabData.map((item, index) => (
            <Tab
              iconPosition="start"
              icon={
                index === 0 ? (
                  <AccountCircleOutlined />
                ) : (
                  <AdminPanelSettingsOutlined />
                )
              }
              style={{
                textTransform: 'capitalize',
                color: index === value ? colors.purpleDark : colors.gray4,
              }}
              key={item}
              label={item}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>

        <Box style={{ width: '80%', margin: '40px auto 0' }}>
          <AvatarSection userHole={data?.userType} fullName={data?.fullname} />

          <TabsContent
            value={value}
            inCommingData={DataToShow(data) as any}
            userId={data?.id || 0}
          />
        </Box>
      </Box>
      {}
    </Box>
  );
};

export default CustomTabs;
