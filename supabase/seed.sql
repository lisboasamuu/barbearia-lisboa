-- DEMONSTRATION seed for local/development environments only.
-- No fictional customers or appointments are created.

insert into public.services (id, name, description, duration_minutes, active)
values
  ('10000000-0000-4000-8000-000000000001', 'Corte masculino', 'Corte construído para o seu estilo, formato de rosto e rotina.', 50, true),
  ('10000000-0000-4000-8000-000000000002', 'Barba completa', 'Desenho, alinhamento e acabamento com toalha quente.', 35, true),
  ('10000000-0000-4000-8000-000000000003', 'Corte + barba', 'A experiência completa para renovar o visual de uma vez.', 80, true),
  ('10000000-0000-4000-8000-000000000004', 'Acabamento', 'Contornos, nuca e costeletas alinhados para manter o corte em dia.', 25, true),
  ('10000000-0000-4000-8000-000000000005', 'Corte infantil', 'Atendimento paciente e cuidadoso para os pequenos.', 45, true),
  ('10000000-0000-4000-8000-000000000006', 'Camuflagem', 'Disfarce sutil de fios brancos no cabelo ou na barba.', 45, true)
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  duration_minutes = excluded.duration_minutes,
  active = excluded.active;

insert into public.business_hours (weekday, start_time, end_time, active)
values
  (1, '09:00', '19:00', true),
  (2, '09:00', '19:00', true),
  (3, '09:00', '19:00', true),
  (4, '09:00', '19:00', true),
  (5, '09:00', '19:00', true),
  (6, '09:00', '17:00', true)
on conflict (weekday, start_time, end_time) do nothing;

-- After creating the administrator in Supabase Auth, authorize that exact user:
-- insert into public.admin_users (user_id)
-- select id from auth.users where email = 'admin@example.com';
