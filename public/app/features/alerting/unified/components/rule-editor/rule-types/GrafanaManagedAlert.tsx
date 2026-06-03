//Changes performed by DevWorx on 2/6/2026:
//Change icon and replaced Grafana with TRCY

import { Trans } from '@grafana/i18n';
import grafanaIconSvg from 'img/grafana_icon.svg';
import devworxIconTransparent from 'img/devworx_icon_transparent.png';

import { RuleFormType } from '../../../types/rule-form';

import { RuleType, type SharedProps } from './RuleType';

const GrafanaManagedRuleType = ({ selected = false, disabled, onClick }: SharedProps) => {
  return (
    <RuleType
      name="TRCY managed alert"
      description={
        <span>
          <Trans i18nKey="alerting.grafana-managed-rule-type.description">
            Supports multiple data sources of any kind.
            <br />
            Transform data with expressions.
          </Trans>
        </span>
      }
      image={devworxIconTransparent}
      selected={selected}
      disabled={disabled}
      value={RuleFormType.grafana}
      onClick={onClick}
    />
  );
};

export { GrafanaManagedRuleType };
