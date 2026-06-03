//Changes performed by DevWorx on 2/6/2026:
//Change icon and replaced Grafana with TRCY

import grafanaIconSvg from 'img/grafana_icon.svg';
import devworxIconTransparent from 'img/devworx_icon_transparent.png';

import { type ConnectionStatus } from '../../hooks/useExternalAmSelector';
import { GRAFANA_RULES_SOURCE_NAME } from '../../utils/datasource';
import { isInternalAlertmanagerInterestedInAlerts } from '../../utils/settings';

import { AlertmanagerCard } from './AlertmanagerCard';
import { useSettings } from './SettingsContext';

interface Props {
  onEditConfiguration: (dataSourceName: string) => void;
}

const BUILTIN_ALERTMANAGER_NAME = 'Alert Manager';

export default function InternalAlertmanager({ onEditConfiguration }: Props) {
  const { configuration, enableAlertmanager, disableAlertmanager, forwardingDisabled } = useSettings();

  const isReceiving = isInternalAlertmanagerInterestedInAlerts(configuration);
  const status: ConnectionStatus = isReceiving ? 'active' : 'uninterested';

  const handleEditConfiguration = () => onEditConfiguration(GRAFANA_RULES_SOURCE_NAME);
  const handleEnable = forwardingDisabled ? undefined : () => enableAlertmanager(GRAFANA_RULES_SOURCE_NAME);
  const handleDisable = forwardingDisabled ? undefined : () => disableAlertmanager(GRAFANA_RULES_SOURCE_NAME);

  return (
    <AlertmanagerCard
      name={BUILTIN_ALERTMANAGER_NAME}
      logo={devworxIconTransparent}
      status={status}
      receiving={isReceiving}
      onEditConfiguration={handleEditConfiguration}
      onEnable={handleEnable}
      onDisable={handleDisable}
      readOnly
    />
  );
}
