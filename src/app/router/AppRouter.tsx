import { AppRoutes } from '@/app/models';
import { FlayerCreator } from '@/features/flayer-creator/pages';
import { LogoCreator } from '@/features/logo-creator/pages';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../components';

export function AppRouter() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route
          path="/"
          element={<Navigate to={AppRoutes.flayer_creator} replace />}
        />
        <Route path={AppRoutes.flayer_creator} element={<FlayerCreator />} />
        <Route path={AppRoutes.logo_creator} element={<LogoCreator />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}
