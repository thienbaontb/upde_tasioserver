import { BindingKey } from '@loopback/context';
import { Notify } from './notify';

export const NotificationBinding = BindingKey.create<Notify>(
    'services.notification',
);