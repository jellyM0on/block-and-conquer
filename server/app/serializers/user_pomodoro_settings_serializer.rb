class UserPomodoroSettingsSerializer < ActiveModel::Serializer
  attributes :settings_pomodoro_time, 
  :settings_pomodoro_break, 
  :settings_ambient_music, 
  :settings_alarm_sound, 
  :settings_reminder_mode, 
  :settings_reminder_time

  def settings_pomodoro_time
    object.format_settings_pomodoro_time
  end

  def settings_pomodoro_break
    object.format_settings_pomodoro_break
  end

  def settings_reminder_time
    object.format_settings_reminder_time
  end
end